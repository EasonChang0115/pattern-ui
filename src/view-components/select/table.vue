<template>
  <h3 class="section-title">Select Number Attributes</h3>
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

  <h3 class="section-title">Select Number Methods</h3>
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
        param: 'placeholder',
        desc: '空值時顯示佔位文本',
        type: 'string',
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
        param: 'size',
        desc: '數入框尺寸',
        type: 'string',
        options: 'medium / small / mini',
        defalt: 'false'
      }
    ]);
    const methods = reactive([
      {
        param: '選中的 radio 原生 event',
        desc: '綁定值變化時會觸發的事件',
        name: 'change'
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
