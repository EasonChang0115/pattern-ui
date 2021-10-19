<template>
  <div class="pg-checkbox-group" :class="`size-${sizeType}`">
    <slot></slot>
  </div>
</template>
<script>
import {
  computed,
  defineComponent,
  provide,
  getCurrentInstance,
  ref,
  nextTick
} from 'vue';
export default defineComponent({
  name: 'PgCheckboxGroup',
  props: {
    modelValue: {
      type: [Array],
      default: () => []
    },
    disabled: Boolean,
    size: {
      type: [String],
      default: 'normal',
      validator(value) {
        return ['normal', 'medium', 'small', 'mini'].indexOf(value) !== -1;
      }
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const emitValuefromSub = (newValue) => {
      emit('update:modelValue', newValue);
      nextTick(() => {
        emit('handleChange', newValue);
      });
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emitValuefromSub(val);
      }
    });
    provide('checkbox-group', {
      group: instance.ctx,
      emitValuefromSub,
      modelValue
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
@import "../scss/checkbox-group.scss";
</style>
