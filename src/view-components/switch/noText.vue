<template>
  <h3 class="section-title">沒有文字</h3>
  <div class="section-block">
    <div class="section-insect" style="z-index: 3;">
      <pg-switch v-model="value" height="32" disableText></pg-switch>
    </div>
  </div>
</template>

<script>
import { watch, ref } from 'vue';
export default {
  setup: () => {
    const value = ref(true);
    watch(value, newVal => {
      console.log(newVal);
    });
    return {
      value
    };
  }
};
</script>
