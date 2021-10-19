<template>
  <label
    :for="`pg-checkbox-${uid}`"
    class="pg-checkbox"
    :class="{
      'is-checked': isChecked,
      'is-disabled': isDisabled,
      'is-button': isButton,
    }"
  >
    <div class="pg-checkbox__input">
      <span class="pg-checkbox__input--inner"></span>
      <input
        type="checkbox"
        class="pg-checkbox--input"
        v-model="model"
        :id="`pg-checkbox-${uid}`"
        :checked="isChecked"
        :name="propsName"
        :value="propsValue"
        :disabled="isDisabled"
        @change="handleChange"
      />
    </div>
    <span class="pg-checkbox__label">
      <template v-if="!$slots.default">{{ label }}</template>
      <template v-else><slot></slot></template>
    </span>
  </label>
</template>

<script>
import { defineComponent, computed, getCurrentInstance, inject } from 'vue';
export default defineComponent({
  name: 'PgCheckbox',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: [String, Number, Boolean, Array],
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    },
    // 樣式選擇
    button: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    // data
    const instance = getCurrentInstance();
    // inject
    let checkboxGroup = null;
    if (instance.parent.type.name === 'PgCheckboxGroup') {
      checkboxGroup = inject('checkbox-group');
    }
    // computed
    const isDisabled = computed(() => {
      return (checkboxGroup && checkboxGroup.group.disabled) || props.disabled;
    });
    const isButton = computed(() => {
      return props.button;
    });
    const propsName = computed(() => {
      return props.name;
    });
    const model = computed({
      get() {
        return checkboxGroup
          ? checkboxGroup.modelValue.value
          : props.modelValue;
      },
      set(value) {
        if (checkboxGroup) checkboxGroup.modelValue.value = value;
        else emit('update:modelValue', value);
      }
    });
    const isChecked = computed(() => {
      if (Array.isArray(model.value)) {
        return model.value.includes(props.value);
      } else {
        return model.value;
      }
    });
    const handleChange = (e) => {
      emit('handleChange', e.target.value);
    };
    return {
      handleChange,
      uid: instance.uid,
      isChecked,
      isButton,
      model,
      isDisabled,
      propsName,
      propsValue: props.value
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../scss/checkbox.scss";
</style>
