<template>
  <h3 class="section-title">Input Attributes</h3>
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

  <h3 class="section-title">Input Methods</h3>
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
        param: 'v-model / value',
        desc: '雙向綁定值',
        type: 'string / number',
        options: '-',
        defalt: '—'
      },
      {
        param: 'type',
        desc: 'input 的類型',
        type: 'string',
        options: 'text, textarea, 以及其他原生的 input type 值',
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
        param: 'show-password',
        desc: '若為 true 則 type 會強迫為 password，並顯示開關密碼是否可見',
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
        desc: '數入框尺寸，只在type !== textarea 時有效',
        type: 'string',
        options: 'medium / small / mini',
        defalt: 'false'
      },
      {
        param: 'prefix-icom',
        desc: 'input 頭部圖示',
        type: 'string',
        options: '-',
        defalt: '-'
      },
      {
        param: 'suffix-icon',
        desc: 'input 尾部圖示',
        type: 'string',
        options: '-',
        defalt: '-'
      },
      {
        param: 'rows',
        desc: '若 type === taxtarea，則此屬性有效，為顯示的行數',
        type: 'number',
        options: '-',
        defalt: '2'
      },
      {
        param: 'autosize',
        desc: '若 type === taxtarea，會依照內容調整 textarea 的高度，傳入的型態若為對象，則可以設置最大或最小高度',
        type: 'Object / Boolean',
        options: '-',
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
        param: 'readonly',
        desc: '原生屬性',
        type: 'boolean',
        options: '-',
        defalt: 'false'
      },
      {
        param: 'autofocus',
        desc: '原生屬性',
        type: 'boolean',
        options: '-',
        defalt: 'false'
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
      },
      {
        param: '選中的 radio 原生 event',
        desc: '綁定值變化時會觸發的事件',
        name: 'input'
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
