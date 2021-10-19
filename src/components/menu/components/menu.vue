<template>
  <pg-menu-collapse-transition v-if="props.collapseTransition">
    <ul
      :key="+props.collapse"
      role="menubar"
      :style="{ backgroundColor: props.backgroundColor || '' }"
      :class="{
        'pg-menu': true,
        'pg-menu--horizontal': mode === 'horizontal',
        'pg-menu--collapse': props.collapse,
      }"
    >
      <slot></slot>
    </ul>
  </pg-menu-collapse-transition>
</template>

<script>
import {
  defineComponent,
  provide,
  onMounted,
  ref,
  isRef,
  computed,
  getCurrentInstance
} from 'vue';
import mitt from 'mitt';
import useMenuColor from '../composition-api/useMenuColor';
export default defineComponent({
  name: 'PgMenu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: {
      type: String,
      default: ''
    },
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: 'hover'
    },
    collapse: Boolean,
    backgroundColor: {
      type: String,
      default: ''
    },
    textColor: { type: String },
    activeTextColor: { type: String },
    collapseTransition: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'open', 'select'],
  setup (props, { emit }) {
    // data
    const instance = getCurrentInstance();
    const openedMenus = ref(
      props.defaultOpeneds && !props.collapse
        ? props.defaultOpeneds.slice(0)
        : []
    );
    const submenus = ref({});
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const rootMenuEmitter = mitt();
    const router = instance.appContext.config.globalProperties.$router;
    const hoverBackground = useMenuColor(props.backgroundColor);
    // computed
    const isMenuPopup = computed(() => {
      return (
        props.mode === 'horizontal' ||
        (props.mode === 'vertical' && props.collapse)
      );
    });

    // methods
    const initializeMenu = () => {
      const index = activeIndex.value;
      const activeItem = items.value[index];
      if (!activeItem || props.mode === 'horizontal' || props.collapse) return;
      const { indexPath } = activeItem;
      indexPath.forEach(index => {
        const submenu = submenus.value[index] ? submenus.value[index] : indexPath;
        submenu && openMenu(index, submenu);
      });
    };
    const routeToItem = (item, onError) => {
      const route = item.route || item.index;
      try {
        if (router) {
          router.push(route, () => null, onError);
        }
      } catch (e) {
      }
    };
    const handleItemClick = (item) => {
      const { index, indexPath } = item;
      const hasIndex = item.index !== null;
      const oldActiveIndex = activeIndex.value;
      if (hasIndex) {
        activeIndex.value = item.index;
      }
      emit('select', index, indexPath.value, item);
      if (props.mode === 'horizontal' || props.collapse) {
        openedMenus.value = [];
      }
      if (props.router && router && hasIndex) {
        routeToItem(item, error => {
          activeIndex.value = oldActiveIndex;
          if (error) {
            // eslint-disable-next-line no-useless-return
            if (error.name === 'NavigationDuplicated') return;
          }
        });
      }
    };
    const handleSubmenuClick = (submenu) => {
      const { index, indexPath } = submenu;
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index);
        emit('close', index, indexPath.value);
      } else {
        openMenu(index, indexPath);
        emit('open', index, indexPath.value);
      }
    };
    const addSubMenu = (item) => {
      submenus.value[item.index] = item;
    };
    const removeSubMenu = (item) => {
      delete submenus.value[item.index];
    };
    const addMenuItem = (item) => {
      items.value[item.index] = item;
    };
    const removeMenuItem = (item) => {
      delete items.value[item.index];
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index)) return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index) => {
          return (
            (isRef(indexPath) ? indexPath.value : indexPath).indexOf(index) !==
            -1
          );
        });
      }
      openedMenus.value.push(index);
    };
    const closeMenu = index => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const closeAllMenu = () => {
      openedMenus.value.length = 0;
    };

    // provide
    provide('rootMenu', {
      props,
      openedMenus,
      activeIndex,
      isMenuPopup,
      hoverBackground,
      methods: {
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeAllMenu,
        closeMenu
      },
      rootMenuEmit: rootMenuEmitter.emit,
      rootMenuOn: rootMenuEmitter.on
    });
    provide(`subMenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu
    });

    // life circle
    onMounted(() => {
      initializeMenu();
      rootMenuEmitter.on('menuItem:item-click', handleItemClick);
      rootMenuEmitter.on('submenu:submenu-click', handleSubmenuClick);
      // if (props.mode === 'horizontal') {
      //   new Menubar(instance.vnode.el)
      // }
    });
    return {
      props,
      isMenuPopup
      // open,
      // close
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/menu.scss';
</style>
