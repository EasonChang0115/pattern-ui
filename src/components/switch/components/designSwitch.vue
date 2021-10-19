<template>
  <div class="pg-design-switch">
    <label v-if="!isButton" :id="outOfRange ? 'warning' : ''" :class="props.disabled ? 'no-drop' : ''" class="default-direction-title">
      <slot v-if="!outOfRange">{{ `${props.label} ${props.unit ? `(${props.unit})` : ''}` }}</slot>
      <span v-else>{{ `${props.outOfRangeText}: ${props.min} ~ ${props.max}` }}</span>
    </label>
    <div v-if="!isButton">
      <pg-switch v-model="currentValue" :height="height" :width="width" :disabled="disabled" :onText="onText" :offText="offText" :disableText="disableText">
      </pg-switch>
    </div>
    <pg-button v-if="isButton" :type="buttonType" size="small" @click="currentValue = !currentValue">{{ props.label }}</pg-button>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
export default defineComponent({
  name: 'PgDesignSwitch',
  props: {
    isButton: {
      type: Boolean,
      default: false
    },
    buttonType: {
      type: String,
      default: 'primary'
    },
    disableText: {
      type: Boolean,
      default: false
    },
    outOfRangeText: {
      type: String,
      default: 'Out of range'
    },
    label: {
      type: String,
      default: 'Default Label'
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: [Number, String]
    },
    onText: {
      type: String,
      default: 'On'
    },
    offText: {
      type: String,
      default: 'Off'
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    id: String
  },
  emits: ['update:modelValue', 'change', 'input'],
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
      currentValue,
      outOfRange,
      props
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/design-switch.scss';
</style>
