<template>
  <div class="pg-slider">
    <div
      class="pg-slider__tips"
      :style="tipPosition"
      v-show="!hideTips && showTips & !showInput"
    >
      <div
        class="pg-slider__tips--circle"
        :class="{ 'start-color': startColor }"
      >
        {{ rate }}
      </div>
      <div
        class="pg-slider__tips--trangle"
        :class="{ 'start-color': startColor }"
      ></div>
    </div>
    <pg-input
      v-if="showInput"
      v-model="rate"
      size="mini"
    ></pg-input>
    <div class="pg-slider__input">
      <input
        type="range"
        :max="max"
        :min="min"
        v-model="rate"
        ref="slider"
        v-bind="$attrs"
        @mousedown="showTips = true"
        @mouseup="showTips = false"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, toRefs } from 'vue';
export default defineComponent({
  name: 'PgSlider',
  emits: ['update:modelValue'],
  props: {
    showInput: {
      type: Boolean,
      default: false
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
      type: [String, Number],
      default: () => {
        return 0;
      }
    },
    hideTips: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { max, min } = toRefs(props);
    const showTips = ref(false);
    const rate = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        let newNumber = Number(value);
        if (isNaN(newNumber)) newNumber = 0;
        if (newNumber > max.value) newNumber = max.value;
        if (newNumber < min.value) newNumber = min.value;
        emit('update:modelValue', newNumber);
      }
    });
    const tipPosition = computed(() => {
      const xOffset =
        9 - 18 * ((rate.value - min.value) / (max.value - min.value));
      return {
        left: `${((rate.value - min.value) * 100) / (max.value - min.value)}%`,
        marginLeft: `${xOffset}px`,
        transform: 'translateX(-50%)'
      };
    });
    const startColor = computed(() => min.value === parseInt(rate.value));
    return {
      showTips,
      // computed
      rate,
      tipPosition,
      startColor
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../scss/slider.scss";
</style>
