<template>
  <div ref="pgScrollbar" class="pg-scrollbar">
    <div class="pg-scrollbar-viewer">
      <div class="pg-scrollbar-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
  name: 'PgScrollbar',
  setup() {
    const pgScrollbar = ref(null);
    onMounted(() => {
      const style = getComputedStyle(pgScrollbar.value.parentNode);
      const originColor = style.color;
      pgScrollbar.value.firstChild.style.setProperty(
        '--originColor',
        originColor
      );
    });

    return {
      pgScrollbar
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/scrollbar.scss";
</style>
