
<template>
  <div class="loading-demo-page mb-5">
    <h2 class="page-title">Loading 加載中</h2>
    <p class="description">加載數據顯示動畫。</p>
    <Area />
    <Page />
  </div>
</template>

<script>
import Area from '@/view-components/loading/area';
import Page from '@/view-components/loading/page';
export default {
  components: {
    Area,
    Page
  }
};
</script>

<style>
</style>
