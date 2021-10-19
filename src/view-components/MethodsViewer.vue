<template>
  <h3 class="section-title">{{ title }}</h3>
  <div class="section-block">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th v-for="item in Object.keys(methodOptions)" :key="item">
            {{ methodOptions[item] }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in methods" :key="item.param">
          <td v-for="tool in Object.keys(item)" :key="tool + item.param">
            {{ item[tool] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 方法區塊
import { methodOptions } from '@/utils/descript.js';
export default {
  props: {
    title: {
      type: String,
      default: '方法'
    },
    methods: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {
      methodOptions
    };
  }
};
</script>

<style lang="scss" scoped>
.section-block {
  margin-bottom: 20px;
}
</style>
