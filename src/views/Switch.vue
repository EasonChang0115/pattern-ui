<template>
  <div class="switch-demo-page mb-5">
    <h2 class="page-title">Switch 開關</h2>
    <p class="description">兩種互相對立或選擇的狀態切換，可用於開或關。</p>
    <Basic />
    <NoText />
    <Design />
    <Table />
  </div>
</template>

<script>
import Basic from '@/view-components/switch/basic.vue';
import Design from '@/view-components/switch/design.vue';
import Table from '@/view-components/switch/table.vue';
import NoText from '@/view-components/switch/noText.vue';

export default {
  components: {
    Basic,
    Design,
    Table,
    NoText
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
