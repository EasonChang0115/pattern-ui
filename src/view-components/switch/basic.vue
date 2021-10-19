<template>
  <h3 class="section-title">基本用法</h3>
  <div class="section-block">
    <div class="section-insect" style="z-index: 3;">
      <pg-switch v-model="value" height="32"></pg-switch>
    </div>
  </div>
  <h3 class="section-title">文字描述</h3>
  <div class="section-block">
    <div class="section-insect" style="z-index: 3;">
      <pg-switch
        v-model="value2"
        height="32"
        onText="釐米"
        offText="英吋"
      ></pg-switch>
    </div>
  </div>
  <h3 class="section-title">禁用狀態</h3>
  <div class="section-block">
    <div class="section-insect" style="z-index: 3;">
      <pg-switch
        v-model="value3"
        height="32"
        onText="釐米"
        offText="英吋"
        disabled
      ></pg-switch>
    </div>
  </div>
</template>

<script>
import { watch, ref } from 'vue';
export default {
  setup: () => {
    const value = ref(true);
    const value2 = ref(false);
    const value3 = ref(true);
    watch(value, (newVal) => {
      console.log(newVal);
    });
    return {
      value,
      value2,
      value3
    };
  }
};
</script>
