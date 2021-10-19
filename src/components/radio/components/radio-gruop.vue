<template>
  <div class="pg-radio-group" :class="`size-${sizeType}`">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent, provide, getCurrentInstance, ref } from 'vue';
export default defineComponent({
  name: 'PgRadioGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: Boolean,
    size: {
      type: [String],
      default: 'normal',
      validator (value) {
        return ['normal', 'medium', 'small', 'mini'].indexOf(value) !== -1;
      }
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const emitValuefromSub = (newValue) => {
      emit('update:modelValue', newValue);
    };
    provide('radio-group', {
      group: instance.ctx,
      emitValuefromSub
    });
    const sizeType = ref(props.size);
    const isDisabled = ref(props.disabled);
    return {
      isDisabled,
      sizeType
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/radio-group.scss';
</style>
