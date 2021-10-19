<template>
  <div
    class="pg-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked, 'is-disabled-text': disableText }"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
    @click.prevent="switchValue"
    :style="{
      width: switchWidth + 'px',
      height: switchHeight + 'px'
    }"
  >
    <input
      :id="id"
      ref="input"
      class="pg-switch__input"
      type="checkbox"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      @change="handleChange"
      @keydown.enter="switchValue"
    />
    <span class="pg-switch__core" :class="[checked ? 'is-left' : 'is-right']">
      <span :aria-hidden="checked" v-show="!disableText">{{ checked ? onText : offText }}</span>
    </span>
    <span :class="['pg-switch__label', 'pg-switch__label--left', !checked ? 'is-active' : '']">
      <span :aria-hidden="checked">{{ onText }}</span>
    </span>
    <span :class="['pg-switch__label', 'pg-switch__label--right', checked ? 'is-active' : '']">
      <span :aria-hidden="!checked">{{ offText }}</span>
    </span>
  </div>
</template>
<script>
import { defineComponent, computed, onMounted, ref, nextTick, watch } from 'vue';
export default defineComponent({
  name: 'PgSwitch',
  props: {
    disableText: {
      type: Boolean,
      default: false
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
      type: [Number, String],
      default: 100
    },
    height: {
      type: [Number, String]
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
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
  setup(props, ctx) {
    const isModelValue = ref(props.modelValue !== false);
    const input = ref(null);
    const switchWidth = computed(() => {
      if (props.disableText) return 40;
      else return props.width;
    });
    const switchHeight = computed(() => {
      if (props.disableText) return 22;
      else return props.height;
    });
    watch(
      () => props.modelValue,
      () => {
        isModelValue.value = true;
      }
    );
    watch(
      () => props.value,
      () => {
        isModelValue.value = false;
      }
    );
    const actualValue = computed(() => {
      return isModelValue.value ? props.modelValue : props.value;
    });
    const checked = computed(() => {
      return actualValue.value === props.activeValue;
    });
    if (!~[props.activeValue, props.inactiveValue].indexOf(actualValue.value)) {
      ctx.emit('update:modelValue', props.inactiveValue);
      ctx.emit('change', props.inactiveValue);
      ctx.emit('input', props.inactiveValue);
    }
    watch(checked, () => {
      input.value.checked = checked.value;
    });
    const switchDisabled = computed(() => {
      return props.disabled;
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      ctx.emit('update:modelValue', val);
      ctx.emit('change', val);
      ctx.emit('input', val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      !switchDisabled.value && handleChange();
    };
    onMounted(() => {
      input.value.checked = checked.value;
    });
    return {
      input,
      switchWidth,
      switchHeight,
      switchDisabled,
      checked,
      handleChange,
      switchValue
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/switch.scss';
</style>
