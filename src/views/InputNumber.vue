<template>
  <div class="input-demo-page mb-5">
    <h2 class="page-title">Input Number 數字輸入框</h2>
    <p class="description">僅限數字輸入，可以定義範圍</p>
    <Basic />
    <Step />
    <Size />
    <Design />
    <Table />
  </div>
</template>

<script>
import Basic from '../view-components/inputNumber/basic.vue';
import Step from '../view-components/inputNumber/step.vue';
import Size from '../view-components/inputNumber/size.vue';
import Design from '../view-components/inputNumber/design.vue';
import Table from '../view-components/inputNumber/table.vue';
export default {
  components: {
    Basic,
    Step,
    Size,
    Table,
    Design
  }
};
</script>

<style lang="scss" scoped>
</style>
