<template>
  <div class="pg-dialog__item--wrapper">
    <label v-if="label" class="pg-dialog-item__label">{{ label }}</label>
    <div class="pg-dialog-item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pgDialogItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/item-wrapper.scss';
</style>
