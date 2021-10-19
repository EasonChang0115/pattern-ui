<template>
  <h3 class="section-title">基本用法</h3>
  <div class="section-block">
    <div class="section-insect" style="z-index: 4;">
      <pg-select v-model="value" placeholder="請選擇">
        <pg-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </pg-option>
      </pg-select>
    </div>
  </div>
  <h3 class="section-title">禁用部分選項</h3>
  <div class="section-block">
    <div class="section-insect" style="z-index: 3;">
      <pg-select v-model="value2" placeholder="請選擇">
        <pg-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </pg-option>
      </pg-select>
    </div>
  </div>
  <h3 class="section-title">禁用狀態</h3>
  <div class="section-block">
    <div class="section-insect" style="z-index: 3;">
      <pg-select v-model="value2" disabled placeholder="我被禁用了 糟糕">
        <pg-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </pg-option>
      </pg-select>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup: () => {
    const options = ref([{
      value: '選項一',
      label: 'vue 3 初學者入門'
    }, {
      value: '選項二',
      label: 'react advance 學習'
    }, {
      value: '選項三',
      label: 'jquery 動畫製作',
      disabled: true
    }, {
      value: '選項四',
      label: 'graphQL 資料串接'
    }, {
      value: '選項五',
      label: 'flutter 跨平台開發'
    }, {
      value: '選項六',
      label: 'boostrap 5'
    }, {
      value: '選項七',
      label: 'tawild css'
    }]);
    const value = ref('選項二');
    const value2 = ref('');
    watch(value, (newVal) => {
      console.log(newVal);
    });
    return {
      options,
      value,
      value2
    };
  }
};
</script>
