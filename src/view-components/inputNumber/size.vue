<template>
  <h3 class="section-title">尺寸</h3>
  <div class="section-block">
    <h4 class="mb-3 mt-1">額外提供了 medium、small、mini 三種尺寸的數字輸入框</h4>
    <div class="section-insect row">
      <div class="col-sm-6 col-lg-3">
        <pg-input-number v-model="num" @change="handleChange"></pg-input-number>
      </div>
      <div class="col-sm-6 col-lg-3">
        <pg-input-number v-model="num" size="medium" @change="handleChange"></pg-input-number>
      </div>
      <div class="col-sm-6 col-lg-3">
        <pg-input-number v-model="num" size="small" @change="handleChange"></pg-input-number>
      </div>
      <div class="col-sm-6 col-lg-3">
        <pg-input-number v-model="num" size="mini" @change="handleChange"></pg-input-number>
      </div>
    </div>
    <div class="mt-3" style="color: #999999">輸入的內容 {{ num }}</div>
  </div>
  <h3 class="section-title">按钮位置</h3>
  <div class="section-block">
    <h4 class="mt-1 mb-3">設置 controls-right 屬性可以控制按鈕位置於右側。</h4>
    <div class="section-insect row">
      <div class="col-sm-6 col-lg-3">
        <pg-input-number v-model="num2" :min="1" controls-right @change="handleChange"></pg-input-number>
      </div>
      <div class="col-sm-6 col-lg-3">
        <pg-input-number v-model="num2" size="medium" :min="1" controls-right @change="handleChange"></pg-input-number>
      </div>
      <div class="col-sm-6 col-lg-3">
        <pg-input-number v-model="num2" size="small" :min="1" controls-right @change="handleChange"></pg-input-number>
      </div>
      <div class="col-sm-6 col-lg-3">
        <pg-input-number v-model="num2" :width="100" size="mini" :min="1" controls-right @change="handleChange"></pg-input-number>
      </div>
    </div>
    <div class="mt-3" style="color: #999999">輸入的內容 {{ num2 }}</div>
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
      num: ref(4),
      num2: ref(1),
      handleChange
    };
  }
};
</script>
