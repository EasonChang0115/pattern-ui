<template>
  <h3 class="section-title">步數</h3>
  <div class="section-block">
    <h4 class="mb-3">允許定義遞增遞減的步數控制</h4>
    <div class="section-insect">
      <pg-input-number v-model="input1" :step="2" @change="handleChange"></pg-input-number>
    </div>
    <div class="mt-3" style="color: #999999">輸入的內容 {{ input1 }}</div>
  </div>
  <h3 class="section-title">精度</h3>
  <div class="section-block">
    <h4 class="mb-3 mt-1">設置 precision 屬性可以控制數值精度，接收一個 Number。</h4>
    <div class="section-insect">
      <pg-input-number v-model="input2" :step="2" :precision="2" @change="handleChange"></pg-input-number>
    </div>
    <div class="mt-3" style="color: #999999">輸入的內容 {{ input2 }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup: props => {
    const handleChange = value => {
      console.log(value);
    };
    return {
      input1: ref(0),
      input2: ref(2),
      handleChange
    };
  }
};
</script>
