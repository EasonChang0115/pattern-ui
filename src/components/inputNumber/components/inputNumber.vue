<template>
  <div
    :class="[
      'pg-input-number',
      inputNumberSize ? 'pg-input-number--' + inputNumberSize : '',
      { 'is-disabled': inputNumberDisabled },
      { 'is-without-controls': !controls },
      { 'is-controls-right': controlsAtRight },
      { 'is-uint': unit }
    ]"
    :style="{ width: `${width}px` }"
    @dragstart.prevent
  >
    <span
      v-if="controls"
      v-repeat-click="decrease"
      class="pg-input-number__decrease"
      role="button"
      :class="{ 'is-disabled': minDisabled || inputNumberDisabled }"
      @keydown.enter="decrease"
    >
      <i :class="`pg-icon-${controlsAtRight ? 'arrow-down' : 'minus'}`"></i>
    </span>
    <span
      v-if="controls"
      v-repeat-click="increase"
      class="pg-input-number__increase"
      role="button"
      :class="{ 'is-disabled': maxDisabled || inputNumberDisabled }"
      @keydown.enter="increase"
    >
      <i :class="`pg-icon-${controlsAtRight ? 'arrow-up' : 'plus'}`"></i>
    </span>
    <pg-input
      ref="input"
      :model-value="displayValue"
      :placeholder="placeholder"
      :disabled="inputNumberDisabled"
      :size="inputNumberSize"
      :max="max"
      :min="min"
      :name="name"
      :label="label"
      :type="controlsRight ? 'number' : ''"
      :unit="unit"
      @keydown.up.prevent="increase"
      @keydown.down.prevent="decrease"
      @blur="event => $emit('blur', event)"
      @focus="event => $emit('focus', event)"
      @input="handleInput"
      @change="handleInputChange"
      @mousewheel="handleMouseWheel"
    />
  </div>
</template>
<script>
import { computed, defineComponent, reactive, ref, watch, onMounted, onUpdated } from 'vue';
import RepeatClick from '@/utils/repeat-click.js';
import { isValidComponentSize } from '@/utils/validators.js';
import { toRawType } from '@vue/shared';
import PgInput from '@/components/input';
export default defineComponent({
  name: 'PgInputNumber',
  components: {
    PgInput
  },
  directives: {
    RepeatClick
  },
  props: {
    unit: {
      type: String
    },
    width: {
      type: Number
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    modelValue: {
      required: true,
      validator: val => {
        return toRawType(val) === 'Number' || val === undefined;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsRight: {
      type: Boolean,
      default: false
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator: val => val >= 0 && val === parseInt(`${val}`, 10)
    }
  },
  emits: ['update:modelValue', 'change', 'input', 'blur', 'focus'],
  setup(props, { emit }) {
    const input = ref(null);
    const data = reactive({
      currentValue: props.modelValue,
      userInput: null
    });
    const minDisabled = computed(() => {
      return _decrease(props.modelValue) < props.min;
    });
    const maxDisabled = computed(() => {
      return _increase(props.modelValue) > props.max;
    });
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (props.precision !== undefined) {
        if (stepPrecision > props.precision) {
          console.warn('[Pattern Warn][InputNumber]precision should not be less than the decimal places of step');
        }
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const controlsAtRight = computed(() => {
      return props.controls && props.controlsRight;
    });
    const inputNumberSize = computed(() => {
      return props.size;
    });
    const inputNumberDisabled = computed(() => {
      return props.disabled;
    });
    const displayValue = computed(() => {
      if (data.userInput !== null) {
        return data.userInput;
      }
      let { currentValue } = data;
      if (typeof currentValue === 'number') {
        if (props.precision !== undefined) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (pre === undefined) pre = numPrecision.value;
      return parseFloat(`${Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre)}`);
    };
    const getPrecision = value => {
      if (value === undefined) return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf('.');
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const _increase = val => {
      if (typeof val !== 'number' && val !== undefined) return data.currentValue;
      const precisionFactor = Math.pow(10, numPrecision.value);
      return toPrecision((precisionFactor * val + precisionFactor * props.step) / precisionFactor);
    };
    const _decrease = val => {
      if (typeof val !== 'number' && val !== undefined) return data.currentValue;
      const precisionFactor = Math.pow(10, numPrecision.value);
      return toPrecision((precisionFactor * val - precisionFactor * props.step) / precisionFactor);
    };
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value) return;
      const value = props.modelValue || 0;
      const newVal = _increase(value);
      setCurrentValue(newVal);
    };
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value) return;
      const value = props.modelValue || 0;
      const newVal = _decrease(value);
      setCurrentValue(newVal);
    };
    const setCurrentValue = newVal => {
      const oldVal = data.currentValue;
      if (typeof newVal === 'number' && props.precision !== undefined) {
        newVal = toPrecision(newVal, props.precision);
      }
      if (newVal !== undefined && newVal >= props.max) newVal = props.max;
      if (newVal !== undefined && newVal <= props.min) newVal = props.min;
      if (oldVal === newVal) return;
      data.userInput = null;
      emit('update:modelValue', newVal);
      emit('input', newVal);
      emit('change', newVal, oldVal);
      data.currentValue = newVal;
    };
    const handleInput = value => {
      return (data.userInput = value);
    };
    const handleInputChange = value => {
      const newVal = value === '' ? undefined : Number(value);
      if (!isNaN(newVal) || value === '') {
        setCurrentValue(newVal);
      }
      data.userInput = null;
    };
    const handleMouseWheel = e => {
      const { value } = e.target;
      let newVal = value === undefined ? value : Number(value);
      if (newVal !== undefined) {
        if (isNaN(newVal)) return;
        if (props.precision !== undefined) {
          newVal = toPrecision(newVal, props.precision);
        }
      }
      if (newVal !== undefined && newVal >= props.max) {
        newVal = props.max;
        emit('update:modelValue', newVal);
      }
      if (newVal !== undefined && newVal <= props.min) {
        newVal = props.min;
        emit('update:modelValue', newVal);
      }
      data.currentValue = newVal;
      data.userInput = null;
    };
    watch(
      () => props.modelValue,
      value => {
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) return;
          if (props.precision !== undefined) {
            newVal = toPrecision(newVal, props.precision);
          }
        }
        if (newVal !== undefined && newVal >= props.max) {
          newVal = props.max;
          emit('update:modelValue', newVal);
        }
        if (newVal !== undefined && newVal <= props.min) {
          newVal = props.min;
          emit('update:modelValue', newVal);
        }
        data.currentValue = newVal;
        data.userInput = null;
      },
      { immediate: true }
    );
    onMounted(() => {
      const innerInput = input.value.input;
      innerInput.setAttribute('role', 'spinbutton');
      innerInput.setAttribute('aria-valuemax', props.max);
      innerInput.setAttribute('aria-valuemin', props.min);
      innerInput.setAttribute('aria-valuenow', data.currentValue);
      innerInput.setAttribute('aria-disabled', inputNumberDisabled.value);
      if (toRawType(props.modelValue) !== 'Number' && props.modelValue !== undefined) {
        emit('update:modelValue', undefined);
      }
    });
    onUpdated(() => {
      const innerInput = input.value.input;
      innerInput.setAttribute('aria-valuenow', data.currentValue);
    });
    return {
      input,
      displayValue,
      handleInput,
      handleInputChange,
      handleMouseWheel,
      controlsAtRight,
      decrease,
      increase,
      inputNumberSize,
      inputNumberDisabled,
      maxDisabled,
      minDisabled
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/inputNumber.scss';
</style>
