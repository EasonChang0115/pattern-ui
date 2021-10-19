<template>
  <div class="pg-design-slider">
    <label :id="outOfRange ? 'warning' : ''" :class="props.disabled ? 'no-drop' : ''" class="default-direction-title">
      <slot v-if="!outOfRange">{{ `${props.label} ${props.unit ? `(${props.unit})` : ''}` }}</slot>
      <span v-else>{{ `${props.outOfRangeText}: ${props.min} ~ ${props.max}` }}</span>
    </label>
    <pg-slider v-model="currentValue" show-input :min="props.min" :max="props.max"></pg-slider>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
export default defineComponent({
  name: 'PgDesignSlider',
  emits: ['update:modelValue', 'change'],
  props: {
    outOfRangeText: {
      type: String,
      default: 'Out of range'
    },
    label: {
      type: String,
      default: 'Default Label'
    },
    max: {
      type: [String, Number],
      default: 100
    },
    min: {
      type: [String, Number],
      default: 0
    },
    modelValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number],
      default: () => {
        return 0;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const outOfRange = ref(false);
    const currentValue = computed({
      get() {
        if (props.modelValue === 0) return props.modelValue;
        return props.modelValue ? props.modelValue : props.value;
      },
      set(val) {
        emit('update:modelValue', val);
        emit('change', val);
      }
    });
    return {
      props,
      outOfRange,
      currentValue
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/deisgn-slider.scss';
</style>
