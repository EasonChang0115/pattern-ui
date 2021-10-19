<template>
  <h3 class="section-title">{{ title }}</h3>
  <div class="section-block">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th v-for="item in Object.keys(attributeOptions)" :key="item">
            {{ attributeOptions[item] }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in attributes" :key="item.param">
          <td v-for="tool in Object.keys(item)" :key="tool + item.param">
            {{ item[tool] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { attributeOptions } from '@/utils/descript.js';

export default {
  props: {
    title: {
      type: String,
      default: '属性'
    },
    attributes: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {
      attributeOptions
    };
  }
};
</script>

<style lang="scss" scoped>
.section-block {
  margin-bottom: 20px;
}
</style>
