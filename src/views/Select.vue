<template>
  <div class="select-demo-page mb-5">
    <h2 class="page-title">Select 選擇器</h2>
    <p class="description">多個選項下，下拉式菜單展示並可以選擇內容</p>
    <Basic />
    <Size />
    <Design />
    <Table />
  </div>
</template>

<script>
import Size from '@/view-components/select/size.vue';
import Basic from '@/view-components/select/basic.vue';
import Table from '@/view-components/select/table.vue';
import Design from '@/view-components/select/design.vue';

export default {
  components: {
    Basic,
    Size,
    Table,
    Design
  }
};
</script>

<style lang="scss" scoped>
</style>
