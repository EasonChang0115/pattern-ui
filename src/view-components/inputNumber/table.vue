<template>
  <h3 class="section-title">Input Number Attributes</h3>
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

  <h3 class="section-title">Input Number Methods</h3>
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
        type: 'number / undefined',
        options: '-',
        defalt: '—'
      },
      {
        param: 'placeholder',
        desc: '空值時顯示佔位文本',
        type: 'string',
        options: '—',
        defalt: '-'
      },
      {
        param: 'name',
        desc: '原生 name 属性',
        type: 'string',
        options: '—',
        defalt: '-'
      },
      {
        param: 'min',
        desc: '最小值',
        type: 'number',
        options: '-',
        defalt: '—Infinity'
      },
      {
        param: 'max',
        desc: '最大值',
        type: 'number',
        options: '-',
        defalt: 'Infinity'
      },
      {
        param: 'controls-right',
        desc: '控制按鈕是否顯示在右側',
        type: 'boolean',
        options: '—',
        defalt: 'false'
      },
      {
        param: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        options: '—',
        defalt: 'false'
      },
      {
        param: 'size',
        desc: '數入框尺寸',
        type: 'string',
        options: 'medium / small / mini',
        defalt: 'false'
      },
      {
        param: 'name',
        desc: '原生屬性',
        type: 'string',
        options: '-',
        defalt: '-'
      },
      {
        param: 'precision',
        desc: '数值精度',
        type: 'number',
        options: '-',
        defalt: '-'
      },
      {
        param: 'step',
        desc: '步長',
        type: 'number',
        options: '-',
        defalt: '１'
      },
      {
        param: 'width',
        desc: '計數器寬度調整 適應於不同情況 盡量用於 mini 的狀況下',
        type: 'number',
        options: '-',
        defalt: '-'
      }
    ]);
    const methods = reactive([
      {
        param: '選中的 radio 原生 event',
        desc: '綁定值變化時會觸發的事件',
        name: 'change'
      },
      {
        param: '(event: Event)',
        desc: '在 Input 失去焦點時觸發',
        name: 'blur'
      },
      {
        param: '(event: Event)',
        desc: '在 Input 獲得焦點時觸發',
        name: 'focus'
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
