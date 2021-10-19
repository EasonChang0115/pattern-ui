<template>
  <div class="pg-design-input-number">
    <label :id="outOfRange ? 'warning' : ''" :class="props.disabled ? 'no-drop' : ''" class="default-direction-title">
      <slot v-if="!outOfRange">{{ `${props.label} ${props.unit ? `(${props.unit})` : ''}` }}</slot>
      <span v-else>{{ `${props.outOfRangeText}: ${props.min} ~ ${props.max}` }}</span>
      <span class="data-tips__text" v-if="tip.text || tip.image"></span>
      <div class="data-tips__content" v-if="tip.text || tip.image">
        <div class="content__top">
          {{ tip.text }}
        </div>
        <div class="content__bottom" v-if="tip.image">
          <img :src="tip.image" />
        </div>
      </div>
    </label>
    <div>
      <transition name="fade">
        <span class="pg-design-input-number__focus-text me-3" v-if="focusText && isShowFocusText">
          {{ focusText }}
        </span>
      </transition>
      <pg-input-number
        v-if="isAuto"
        controls-right
        :step="props.step"
        :precision="props.precision"
        :max="props.max"
        :min="props.min"
        :disabled="disabled || auto"
        size="mini"
        :width="props.width"
        :unit="unit"
        v-model="currentValue"
        @focus="isShowFocusText = true"
        @blur="isShowFocusText = false"
      >
      </pg-input-number>
      <div v-else class="pg_auto" :style="{ width: `${width}px` }">
        <pg-input v-model="autoValue" :width="props.width" size="mini" disabled></pg-input>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { toRawType } from '@vue/shared';
export default {
  name: 'pg-design-input-number',
  props: {
    auto: {
      type: String
    },
    tip: {
      type: Object,
      default: () => ({
        text: '',
        image: ''
      })
    },
    outOfRangeText: {
      type: String,
      default: 'Out of range'
    },
    label: {
      type: String,
      default: 'Default Label'
    },
    unit: {
      type: String,
      default: undefined
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      validator: val => {
        return toRawType(val) === 'Number' || val === undefined;
      }
    },
    value: {
      type: Number
    },
    precision: {
      type: Number,
      validator: val => val >= 0 && val === parseInt(`${val}`, 10)
    },
    focusText: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: null
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const outOfRange = ref(false);
    const isShowFocusText = ref(false);
    const currentValue = computed({
      get() {
        if (props.modelValue === 0) return props.modelValue;
        return props.modelValue ? props.modelValue : props.value;
      },
      set(newVal) {
        if (newVal === props.modelValue || newVal === props.value) return;
        emit('update:modelValue', newVal);
        emit('change', newVal);
      }
    });
    const isAuto = computed(() => !props.auto);
    const autoValue = computed({
      get() {
        return props.auto;
      }
    });
    return {
      isAuto,
      autoValue,
      props,
      isShowFocusText,
      currentValue,
      outOfRange
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/designInputNumber.scss';
</style>
