<template>
  <li
    class="pg-submenu"
    :style="[titleStyle, { backgroundColor }]"
    :class="{
      'is-active': active,
      'is-opened': opened,
      'is-disabled': disabled
    }"
    aria-haspopup="true"
    :aria-expanded="opened"
    @mouseenter="handleMouseenter"
    @mouseleave="() => handleMouseleave(false)"
    @focus="handleMouseenter"
  >
    <div
      ref="verticalTitleRef"
      :style="[titleStyle, titleStyle, { backgroundColor }]"
      class="pg-submenu__title"
      @click="handleClick"
      @mouseenter="handleTitleMouseenter"
      @mouseleave="handleTitleMouseleave"
    >
      <slot name="title" :style="[titleStyle]"></slot>
      <i :class="['pg-submenu__icon-arrow', submenuTitleIcon]"></i>
    </div>
    <pg-collapse-transition>
      <ul
        v-show="opened"
        role="menu"
        class="pg-menu pg-menu--inline"
        :style="{ backgroundColor: rootProps.backgroundColor || '' }"
      >
        <slot></slot>
      </ul>
    </pg-collapse-transition>
  </li>
</template>

<script>
import mitt from 'mitt';
import useMenu from '../composition-api/useMenu';
import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  reactive,
  defineComponent,
  computed,
  getCurrentInstance,
  inject,
  provide,
  watch
} from 'vue';
export default defineComponent({
  name: 'PgSubMenu',
  props: {
    index: {
      type: String,
      required: true
    },
    showTimeout: {
      type: Number,
      default: 300
    },
    hideTimeout: {
      type: Number,
      default: 100
    },
    popperClass: String,
    disabled: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: undefined
    }
  },
  setup (props) {
    const data = reactive({
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      currentPlacement: '',
      mouseInChild: false,
      opened: false
    });
    // emitter
    const subMenuEmitter = mitt();
    const instance = getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(
      instance,
      props.index
    );

    // inject
    const {
      openedMenus,
      isMenuPopup,
      // hoverBackground: rootHoverBackground,
      methods: rootMethods,
      props: rootProps,
      methods: { closeMenu },
      rootMenuOn,
      rootMenuEmit
    } = inject('rootMenu');

    const {
      addSubMenu: parentAddSubmenu,
      removeSubMenu: parentRemoveSubmenu,
      handleMouseleave: parentHandleMouseleave
    } = inject(`subMenu:${parentMenu.value.uid}`);

    // computed
    const mode = computed(() => {
      return rootProps.mode;
    });
    const active = computed(() => {
      let isActive = false;
      const { submenus } = data;
      const { items } = data;
      Object.keys(items).forEach(index => {
        if (items[index].active) {
          isActive = true;
        }
      });
      Object.keys(submenus).forEach(index => {
        if (submenus[index].active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const isFirstLevel = computed(() => {
      let isFirstLevel = true;
      let { parent } = instance;
      while (parent && parent.type.name !== 'PgMenu') {
        if (['PgSubMenu', 'PgMenuItemGroup'].includes(parent.type.name)) {
          isFirstLevel = false;
          break;
        } else {
          // eslint-disable-next-line prefer-destructuring
          parent = parent.parent;
        }
      }
      return isFirstLevel;
    });
    const appendToBody = computed(() => {
      return props.popperAppendToBody === undefined
        ? isFirstLevel.value
        : Boolean(props.popperAppendToBody);
    });
    const submenuTitleIcon = computed(() => {
      return (mode.value === 'horizontal' && isFirstLevel.value) ||
        (mode.value === 'vertical' && !rootProps.collapse)
        ? 'pg-icon-arrow-down'
        : 'pg-icon-arrow-right';
    });
    const opened = computed(() => {
      return openedMenus.value.includes(props.index);
    });
    const backgroundColor = computed(() => {
      return rootProps.backgroundColor || '';
    });
    const activeTextColor = computed(() => {
      return rootProps.activeTextColor || '';
    });
    const textColor = computed(() => {
      return rootProps.textColor || '';
    });
    const titleStyle = computed(() => {
      if (mode.value !== 'horizontal') {
        return {
          color: textColor.value
        };
      }
      return {
        borderBottomColor: active.value
          ? rootProps.activeTextColor
            ? activeTextColor.value
            : ''
          : 'transparent',
        color: active.value ? activeTextColor.value : textColor.value
      };
    });

    // watch
    watch(() => rootProps.collapse, value => {
      if (value) rootMethods.closeAllMenu();
    });

    // methods
    const handleCollapseToggle = value => {
      if (value) {
        updatePlacement();
      }
    };
    const addItem = item => {
      data.items[item.index] = item;
    };
    const removeItem = item => {
      delete data.items[item.index];
    };
    const addSubMenu = item => {
      data.submenus[item.index] = item;
    };
    const removeSubMenu = item => {
      delete data.submenus[item.index];
    };
    const handleClick = () => {
      const { disabled } = props;
      if (
        (rootProps.menuTrigger === 'hover' &&
          rootProps.mode === 'horizontal') ||
        (rootProps.collapse && rootProps.mode === 'vertical') ||
        disabled
      ) {
        return;
      }
      rootMenuEmit('submenu:submenu-click', { index: props.index, indexPath });
    };
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      if (
        !('ActiveXObject' in window) &&
        event.type === 'focus' &&
        !event.relatedTarget
      ) {
        return;
      }
      const { disabled } = props;
      if (
        (rootProps.menuTrigger === 'click' &&
          rootProps.mode === 'horizontal') ||
        (!rootProps.collapse && rootProps.mode === 'vertical') ||
        disabled
      ) {
        return;
      }
      subMenuEmitter.emit('submenu:mouse-enter-child');
      clearTimeout(data.timeout);
      data.timeout = setTimeout(() => {
        rootMethods.openMenu(props.index, indexPath);
      }, showTimeout);
      if (appendToBody.value) {
        parentMenu.value.vnode.el.dispatchEvent(new MouseEvent('mouseenter'));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      if (
        (rootProps.menuTrigger === 'click' &&
          rootProps.mode === 'horizontal') ||
        (!rootProps.collapse && rootProps.mode === 'vertical')
      ) {
        return;
      }
      subMenuEmitter.emit('submenu:mouse-leave-child');
      clearTimeout(data.timeout);
      data.timeout = setTimeout(() => {
        !data.mouseInChild && closeMenu(props.index);
      }, props.hideTimeout);
      if (appendToBody.value && deepDispatch) {
        if (instance.parent.type.name === 'PgSubmenu') {
          parentHandleMouseleave(true);
        }
      }
    };
    const updatePlacement = () => {
      data.currentPlacement =
        mode.value === 'horizontal' && isFirstLevel.value
          ? 'bottom-start'
          : 'right-start';
    };

    // provide
    provide(`subMenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu,
      handleMouseleave
    });

    // lefr cycle
    onBeforeMount(() => {
      rootMenuOn('rootMenu:toggle-collapse', (val) => {
        handleCollapseToggle(val);
      });
      subMenuEmitter.on('submenu:mouse-enter-child', () => {
        data.mouseInChild = true;
        clearTimeout(data.timeout);
      });
      subMenuEmitter.on('submenu:mouse-leave-child', () => {
        data.mouseInChild = false;
        clearTimeout(data.timeout);
      });
    });
    onMounted(() => {
      rootMethods.addSubMenu({
        index: props.index,
        indexPath,
        active
      });
      parentAddSubmenu({
        index: props.index,
        indexPath,
        active
      });
      updatePlacement();
    });
    onBeforeUnmount(() => {
      parentRemoveSubmenu({
        index: props.index,
        indexPath,
        active
      });
      rootMethods.removeSubMenu({
        index: props.index,
        indexPath,
        active
      });
    });
    return {
      data,
      props,
      rootProps,
      mode,
      active,
      opened,
      submenuTitleIcon,
      isMenuPopup,
      activeTextColor,
      backgroundColor,
      textColor,
      titleStyle,

      handleClick,
      handleMouseenter,
      handleMouseleave,

      addItem,
      removeItem,
      addSubMenu,
      removeSubMenu
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/submenu.scss';
</style>
