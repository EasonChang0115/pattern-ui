<template>
  <div class="pg-dialog__form--wrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'pgDialogForm',
  provide () {
    return {
      IForm: this
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
