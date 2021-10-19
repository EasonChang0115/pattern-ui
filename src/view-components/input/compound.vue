<template>
  <h3 class="section-title">復合型輸入框</h3>
  <div class="section-block">
    <h4 class="mb-3">透過 slot ＃prepend 和 ＃append 來對前或後設置內容</h4>
    <div class="section-insect">
      <pg-input
        v-model="input"
        placeholder="請輸入內容"
        @change="handleChange"
      >
        <template #prepend>Http://</template>
      </pg-input>
    </div>
    <div class="mt-3 mb-3" style="color: #999999">
      輸入的內容 {{ input }}
    </div>
    <div class="section-insect">
      <pg-input
        v-model="input1"
        placeholder="請輸入內容"
        @change="handleChange"
      >
        <template #append>.com</template>
      </pg-input>
    </div>
    <div class="mt-3 mb-4" style="color: #999999">
      輸入的內容 {{ input1 }}
    </div>
    <div class="section-insect">
      <pg-input
        v-model="input1"
        placeholder="請輸入內容"
        @change="handleChange"
      >
        <template #prepend>Http://</template>
        <template #append>
          <pg-button icon="pg-icon-search"></pg-button>
        </template>
      </pg-input>
    </div>
    <div class="mt-3" style="color: #999999">
      輸入的內容 {{ input1 }}
    </div>
  </div>
</template>

<script>
import {
  ref
} from 'vue';
export default {
  setup: (props) => {
    const handleChange = value => {
      console.log(value);
    };
    return {
      input: ref(''),
      input1: ref(''),
      handleChange
    };
  }
};
</script>
