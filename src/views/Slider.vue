<template>
  <div class="select-demo-page mb-5">
    <h2 class="page-title">Silder 滑塊</h2>
    <p class="description">通過預先滑塊在一個固定區間內進行選擇</p>
    <Basic />
    <Input />
    <Design />
  </div>
</template>

<script>
import Basic from '@/view-components/slider/basic.vue';
import Input from '@/view-components/slider/input.vue';
import Design from '@/view-components/slider/design.vue';

export default {
  components: {
    Basic,
    Input,
    Design
  }
};
</script>

<style lang="scss" scoped>
</style>
