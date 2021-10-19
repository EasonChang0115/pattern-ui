<template>
  <div class="pg-button-group">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PgButtonGroup'
});
</script>

<style lang="scss" scoped>
$border-left-color: hsla(0,0%,100%,.5);
.pg-button-group {
  display: inline-block;
  vertical-align: middle;
  @include clearfix();
  :deep(.pg-button) {
    float: left;
    position: relative;
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-left-color: $border-left-color
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-color: $border-left-color
    }
  }
}
</style>
