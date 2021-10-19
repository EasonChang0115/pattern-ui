<template>
  <div class="design-side-panel-garment__nav">
    <pg-menu
      :default-active="activeType"
      mode="horizontal"
      @select="handleSelected"
    >
      <pg-menu-item
        v-for="item in props.options"
        :index="item[valueKey]"
        :key="item.iconType"
      >
        {{ t(item.font) }}
      </pg-menu-item>
    </pg-menu>
  </div>
</template>

<script>
// 設計頁面左側欄位 上頭選單包裝
import { computed } from 'vue';
export default {
  name: 'PgLeftSideNavMenu',
  props: {
    i18n: {}, // 若有傳入 i18n 的轉換 function
    defaultKey: {
      type: String,
      default: ''
    },
    valueKey: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    // 导航栏点击事件
    const activeType = computed(() => {
      return props.options[0][props.valueKey];
    });
    const handleSelected = (value) => {
      emit('selectChange', value);
    };
    const t = (font) => (props.i18n ? props.i18n.$t(font) : font);
    return {
      props,
      activeType,
      t,
      handleSelected
    };
  }
};
</script>

<style lang="scss" scoped>
.design-side-panel-garment__nav {
  :deep(.pg-menu) {
    border: none;
    .pg-menu-item {
      position: relative;
      flex: 1;
      font-size: 1rem;
      text-align: center;
      height: 44px;
      line-height: 44px;
      color: $gray-500;
      border: none;
      &::after {
        content: "";
        display: block;
        opacity: 0;
        visibility: hidden;
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: $primary;
        border-radius: 2px;
        transition: 0.3s;
      }
      &.is-active {
        &::after {
          visibility: visible;
          opacity: 1;
        }
        border: none;
        color: $gray-900;
      }
    }
  }
}
</style>
