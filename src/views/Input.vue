<template>
  <div class="input-demo-page mb-5">
    <h2 class="page-title">Input 輸入框</h2>
    <p class="description">pattern 設計頁 輸入框設計</p>
    <p class="description">顯示 vue 綁定的值，通常情況下，請控制 input 事件或是使用 v-model 來更新綁定值。不支持 v-model 綁定的修飾符。</p>
    <basic />
    <disabled />
    <Password />
    <Icon />
    <Textarea />
    <Conmpound />
    <Size />
    <Table />
  </div>
</template>

<script>
import Basic from '@/view-components/input/basic.vue';
import Disabled from '@/view-components/input/disabled.vue';
import Password from '@/view-components/input/password.vue';
import Icon from '@/view-components/input/icon.vue';
import Textarea from '@/view-components/input/textarea.vue';
import Conmpound from '@/view-components/input/compound.vue';
import Size from '@/view-components/input/size.vue';
import Table from '@/view-components/input/table.vue';
export default {
  components: {
    Icon,
    Basic,
    Disabled,
    Password,
    Textarea,
    Conmpound,
    Size,
    Table
  }
};
</script>

<style lang="scss" scoped>
</style>
