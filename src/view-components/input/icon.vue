<template>
  <h3 class="section-title">有 Icon 的輸入框</h3>
  <div class="section-block">
    <h4 class="mb-3">屬性方式</h4>
    <div class="section-insect row">
      <div class="col-6">
        <pg-input
          v-model="input1"
          placeholder="請輸入日期"
          @change="handleChange"
          suffix-icon="pg-icon-calendar"
        >
        </pg-input>
      </div>
      <div class="col-6">
        <pg-input
          v-model="input2"
          placeholder="搜尋內容"
          @change="handleChange"
          prefix-icon="pg-icon-search"
        >
        </pg-input>
      </div>
    </div>
    <h4 class="mb-3 mt-3">slot 方式</h4>
    <div class="section-insect row">
      <div class="col-6">
        <pg-input
          v-model="input3"
          placeholder="請輸入日期"
          @change="handleChange"
        >
          <template #suffix>
            <i class="pg-input__icon pg-icon-calendar"></i>
          </template>
        </pg-input>
      </div>
      <div class="col-6">
        <pg-input
          v-model="input4"
          placeholder="搜尋內容"
          @change="handleChange"
        >
          <template #prefix>
            <i class="pg-input__icon pg-icon-search"></i>
          </template>
        </pg-input>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref
} from 'vue';
export default {
  setup: (props) => {
    const input1 = ref('');
    const input2 = ref('');
    const input3 = ref('');
    const input4 = ref('');
    const handleChange = value => {
      console.log(value);
    };
    return {
      input1,
      input2,
      input3,
      input4,
      handleChange
    };
  }
};
</script>
