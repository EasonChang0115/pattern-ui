<template>
  <label
    :for="`pg-radio-${uid}`"
    class="pg-radio"
    :class="{
      'is-checked': model === value,
      'is-disabled': isDisabled,
      'is-button': isButton
    }"
    @click="getValue($event)"
  >
    <div class="pg-radio__input">
      <span class="pg-radio__input--inner"></span>
      <input
        :id="`pg-radio-${uid}`"
        v-model="model"
        type="radio"
        class="pg-radio--input"
        :value="value"
        :disabled="isDisabled"
      />
    </div>
    <span class="pg-radio__label">
      <template v-if="!$slots.default">{{ label }}</template>
      <template v-else><slot></slot></template>
    </span>
  </label>
</template>

<script>
import { defineComponent, computed, getCurrentInstance, inject } from 'vue';
export default defineComponent({
  name: 'PgRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    disabled: {
      type: Boolean
    },
    // 單選框樣式選擇
    button: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    // data
    const instance = getCurrentInstance();
    // inject
    let radioGroup = null;
    if (instance.parent.type.name === 'PgRadioGroup') {
      radioGroup = inject('radio-group');
    }
    // computed
    const isDisabled = computed(() => {
      return (radioGroup && radioGroup.group.disabled) || props.disabled;
    });
    const isButton = computed(() => {
      return props.button;
    });
    const model = computed({
      get() {
        return radioGroup ? radioGroup.group.modelValue : props.modelValue;
      },
      set(newValue) {
        if (radioGroup) return radioGroup.emitValuefromSub(newValue);
        emit('update:modelValue', newValue);
      }
    });
    // radio gruop 會用到
    const getValue = (e) => {
      emit('getRadioValue', props.modelValue);
    };
    return {
      uid: instance.uid,
      isButton,
      model,
      isDisabled,
      getValue
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../scss/radio.scss";
</style>
