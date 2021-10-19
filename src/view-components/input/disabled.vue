<template>
  <h3 class="section-title">禁用狀態</h3>
  <div class="section-block">
    <div class="section-insect">
      <pg-input v-model="input" placeholder="請輸入內容" @change="handleChange" disabled></pg-input>
    </div>
  </div>
</template>

<script>
import {
  ref
} from 'vue';
export default {
  setup: (props) => {
    const input = ref('被禁用的元件');
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
