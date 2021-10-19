<template>
  <h3 class="section-title">整頁加載</h3>
  <div class="section-block">
    <div class="section-insect">
      <pg-button
        type="primary"
        size="small"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading"
      >
        指令方式
      </pg-button>
      <pg-button type="primary" size="small" @click="openFullScreen2">服務方式</pg-button>
    </div>
    <div class="section-information">
      頁面數據加載時顯示。
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false
    };
  },
  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.section-insect > * {
  margin-left: 8px;
  margin-top: 4px;
  margin-bottom: 16px;
}
</style>
