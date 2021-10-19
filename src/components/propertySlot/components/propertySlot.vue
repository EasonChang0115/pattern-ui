<template>
  <div class="pg-property-slot" :style="{ width: props.width }">
    <div class="pg-property-slot__title"
        :class="{ active: propsShow }"
      @click="propsShow = !propsShow">
      <div class="pg-property-slot__title__icon" >
        <i class="pg-icon-menu"></i>
      </div>
      <div class="pg-property-slot__title__text">
        {{ props.typeFont }}
      </div>
    </div>
    <pg-collapse-transition>
      <div
        class="pg-property-slot__content"
        v-show="propsShow"
      >
        <slot></slot>
      </div>
    </pg-collapse-transition>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'pg-property-slot',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    show: {
      type: Boolean,
      default: true
    },
    typeFont: {
      type: String,
      default: 'property'
    }
  },
  setup(props) {
    const propsShow = ref(props.show);
    return {
      props,
      propsShow
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../scss/propertySlot.scss";
</style>
