<template>
  <h3 class="section-title">基本用法</h3>
  <div class="section-block">
    <div class="section-insect">
      <pg-input v-model="input" placeholder="請輸入內容" @change="handleChange"></pg-input>
    </div>
    <div class="mt-3" style="color: #999999">
      輸入的內容 {{ input }}
    </div>
  </div>
</template>

<script>
import {
  ref
} from 'vue';
export default {
  setup: (props) => {
    const input = ref('');
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
