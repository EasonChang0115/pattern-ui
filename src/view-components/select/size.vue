<template>
  <h3 class="section-title">Size</h3>
  <div class="section-block">
    <div class="section-insect row" style="z-index: 3">
      <div class="col-sm-6 col-lg-3 mt-2">
        <pg-select v-model="value" placeholder="請選擇">
          <pg-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </pg-option>
        </pg-select>
      </div>
      <div class="col-sm-6 col-lg-3 mt-2">
        <pg-select v-model="value1" placeholder="請選擇" size="medium">
          <pg-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </pg-option>
        </pg-select>
      </div>
      <div class="col-sm-6 col-lg-3 mt-2">
        <pg-select v-model="value2" placeholder="請選擇" size="small">
          <pg-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </pg-option>
        </pg-select>
      </div>
      <div class="col-sm-6 col-lg-3 mt-2">
        <pg-select v-model="value3" placeholder="請選擇" size="mini">
          <pg-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </pg-option>
        </pg-select>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup: () => {
    const options = ref([
      {
        value: '選項一',
        label: 'vue 3 初學者入門'
      },
      {
        value: '選項二',
        label: 'react advance 學習'
      },
      {
        value: '選項三',
        label: 'jquery 動畫製作',
        disabled: true
      },
      {
        value: '選項四',
        label: 'graphQL 資料串接'
      },
      {
        value: '選項五',
        label: 'flutter 跨平台開發'
      },
      {
        value: '選項六',
        label: 'boostrap 5'
      },
      {
        value: '選項七',
        label: 'tawild css'
      }
    ]);
    const value = ref('');
    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref('');
    watch(value, (newVal) => {
      console.log(newVal);
    });
    return {
      options,
      value,
      value1,
      value2,
      value3
    };
  }
};
</script>
