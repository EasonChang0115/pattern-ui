<template>
  <div class="messagebox-demo-page">
    <h2 class="page-title">Dialog 對話框或是警告視窗</h2>
    <p class="description"></p>
    <Basic />
    <Alert />
    <From  />
  </div>
</template>

<script>
import Basic from '@/view-components/dialog/basic';
import Alert from '@/view-components/dialog/alert';
import From from '@/view-components/dialog/fromType';
export default {
  components: {
    Basic,
    Alert,
    From
  }
};
</script>

<style lang="scss" scoped>
</style>
