<template>
  <h3 class="section-title">密碼框</h3>
  <div class="section-block">
    <div class="section-insect">
      <pg-input v-model="input" placeholder="請輸入密碼" @change="handleChange" show-password></pg-input>
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
