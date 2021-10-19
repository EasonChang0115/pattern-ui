<template>
  <h3 class="section-title">Switch Attributes</h3>
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

  <h3 class="section-title">Switch Number Methods</h3>
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
import {
  reactive
} from 'vue';
import { attributeOptions, methodOptions } from '@/utils/descript.js';
export default {
  setup: () => {
    const attributes = reactive([
      {
        param: 'v-model / modelValue',
        desc: '雙向綁定值',
        type: 'boolean / string / number',
        options: '-',
        defalt: '-'
      },
      {
        param: 'name',
        desc: '原生 name 属性',
        type: 'string',
        options: '-',
        defalt: '-'
      },
      {
        param: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        options: '-',
        defalt: 'false'
      },
      {
        param: 'width',
        desc: 'switch 寬度',
        type: 'number',
        options: '-',
        defalt: '-'
      },
      {
        param: 'height',
        desc: 'switch 高度',
        type: 'number',
        options: '-',
        defalt: '-'
      }
    ]);
    const methods = reactive([
      {
        param: 'change',
        desc: 'switch 狀態發生變化時的 callback function',
        name: '新狀態的值'
      }
    ]);
    return {
      methodOptions,
      attributeOptions,
      attributes,
      methods
    };
  }
};
</script>
