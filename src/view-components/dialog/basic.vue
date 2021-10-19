<template>
  <h3 class="section-title">基本用法</h3>
  <div class="section-block">
    <h4 class="mb-3">展示重要的提示訊息</h4>
    <div class="section-insect">
      <pg-button type="primary" size="small" @click="btnclick">一般</pg-button>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
  setup: props => {
    const { proxy } = getCurrentInstance();
    const btnclick = () => {
      proxy.$dialog({
        title: '这是最基本的',
        width: '24rem',
        text: '此物件不能移动'
      });
    };
    return {
      btnclick
    };
  }
};
</script>

<style lang="scss" scoped>
.section-insect {
  :deep(button) {
    margin-right: 8px;
  }
}
</style>
