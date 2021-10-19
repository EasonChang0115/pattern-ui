<template>
  <li
    class="pg-menu-item"
    :style="[itemStyle, { backgroundColor }]"
    :class="{
      'is-active': active,
      'is-disabled': disabled
    }"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave"
  >
    <template
      v-if="
        parentMenu.type.name === 'PgMenu' &&
        rootMenu.props.collapse &&
        slots.title
      "
      effect="dark"
      placement="right"
    >
      <template>
        <slot name="title"></slot>
      </template>
      <div
        style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;padding: 0 20px;"
      >
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <slot></slot>
      <slot name="title" class="title"></slot>
    </template>
  </li>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  inject,
  computed,
  onMounted,
  onBeforeUnmount
} from 'vue';
import useMenu from '../composition-api/useMenu';
export default defineComponent({
  name: 'PgMenuItem',
  props: {
    index: {
      default: null,
      validator: val => typeof val === 'string' || val === null
    },
    route: [String, Object],
    disabled: Boolean
  },
  emits: ['click'],
  setup (props, { emit, slots }) {
    const instance = getCurrentInstance();
    const rootMenu = inject('rootMenu');
    const { parentMenu, indexPath } = useMenu(instance, props.index);
    const { addSubMenu, removeSubMenu } = inject(`subMenu:${parentMenu.value.uid}`);
    const active = computed(() => {
      return props.index === rootMenu.activeIndex.value;
    });
    const hoverBackground = computed(() => {
      return rootMenu.hoverBackground.value;
    });
    const backgroundColor = computed(() => {
      return rootMenu.props.backgroundColor || '';
    });
    const activeTextColor = computed(() => {
      return rootMenu.props.activeTextColor || '';
    });
    const textColor = computed(() => {
      return rootMenu.props.textColor || '';
    });
    const mode = computed(() => {
      return rootMenu.props.mode;
    });
    const isNested = computed(() => {
      return parentMenu.value.type.name !== 'PgMenu';
    });
    const itemStyle = computed(() => {
      const style = {
        color: active.value ? activeTextColor.value : textColor.value,
        borderBottomColor: ''
      };
      if (mode.value === 'horizontal' && !isNested.value) {
        style.borderBottomColor = active.value
          ? rootMenu.props.activeTextColor
            ? activeTextColor.value
            : ''
          : 'transparent';
      }
      return style;
    });

    // methods
    const onMouseEnter = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return;
      instance.vnode.el.style.backgroundColor = hoverBackground.value;
    };
    const onMouseLeave = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return;
      instance.vnode.el.style.backgroundColor = backgroundColor.value;
    };

    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.rootMenuEmit('menuItem:item-click', {
          index: props.index,
          indexPath,
          route: props.route
        });
        emit('click', { index: props.index, indexPath: indexPath.value });
      }
    };

    // lefe cycle
    onMounted(() => {
      addSubMenu({ index: props.index, indexPath, active });
      rootMenu.methods.addMenuItem({ index: props.index, indexPath, active });
    });
    onBeforeUnmount(() => {
      removeSubMenu({ index: props.index, indexPath, active });
      rootMenu.methods.removeMenuItem({ index: props.index, indexPath, active });
    });
    return {
      active,
      itemStyle,
      handleClick,
      onMouseEnter,
      onMouseLeave,
      backgroundColor,
      parentMenu,
      rootMenu,
      slots,
      uid: instance.uid
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/menuItem.scss';
</style>
