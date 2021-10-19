<template>
  <li class="pg-menu-item-group">
    <div
      class="pg-menu-item-group__title"
      :style="{ paddingLeft: data.paddingLeft + 'px' }"
    >
      <template v-if="!slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import {
  defineComponent,
  reactive
} from 'vue';
export default defineComponent({
  name: 'PgMenuItemGroup',
  componentName: 'PgMenuItemGroup',
  props: {
    title: {
      type: String
    }
  },
  setup(props, { slots }) {
    // data
    const data = reactive({ paddingLeft: 20 });
    return {
      data,
      props,
      slots
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/menuItemGruup.scss';
</style>
