<template>
  <h3 class="section-title">基本用法</h3>
  <div class="section-block">
    <div class="section-insect">
      <pg-input-number v-model="input" :min="1" :max="10" @change="handleChange"></pg-input-number>
    </div>
    <div class="mt-3" style="color: #999999">輸入的內容 {{ input }}</div>
  </div>
  <h3 class="section-title">禁用狀態</h3>
  <div class="section-block">
    <div class="section-insect">
      <pg-input-number v-model="input" :min="1" :max="10" disabled @change="handleChange"></pg-input-number>
    </div>
    <div class="mt-3" style="color: #999999">輸入的內容 {{ input }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup: props => {
    const input = ref(0);
    const handleChange = value => {
      console.log(value);
    };
    return {
      input,
      handleChange
    };
  }
};
</script>
