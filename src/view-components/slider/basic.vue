<template>
  <h3 class="section-title">基本用法</h3>
  <div class="section-block">
    <div class="section-insect" style="z-index: 3">
      <pg-slider
        v-model="slideValue"
        :min="0"
        :max="10"
      ></pg-slider>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup: () => {
    const slideValue = ref(4);
    watch(slideValue, (value) => {
      console.log(value);
    });
    return {
      slideValue
    };
  }
};
</script>
