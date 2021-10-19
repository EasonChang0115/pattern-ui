<template>
  <div class="checkbox-demo-page mb-5">
    <h2 class="page-title">Checkbox 多選框</h2>
    <p class="description">在一組備選項中進行多選</p>
    <h3 class="section-title">基本用法</h3>
    <p class="description">單獨使用可以表示兩種狀態的切換</p>
    <div class="section-block">
      <div class="section-insect">
        <pg-checkbox v-model="checked" @handleChange="handleChange">單一選項</pg-checkbox>
      </div>
    </div>
    <div class="section-information">
      v-model 綁定變數，若是單一的 checkbox，默認綁定的變數型態為 boolean，選中為 true。
    </div>
    <h3 class="section-title">禁用狀態</h3>
    <p class="description">多選框不能用的狀態</p>
    <div class="section-block">
      <div class="section-insect">
        <pg-checkbox v-model="checked1" disabled>選項一</pg-checkbox>
        <pg-checkbox v-model="checked2" disabled>選項二</pg-checkbox>
      </div>
    </div>
    <h3 class="section-title">多選框組</h3>
    <p class="description">適用於在多個狀況下，很多不同組合的多選系列</p>
    <div class="section-block">
      <div class="section-insect">
        <pg-checkbox-group v-model="checkList" @handleChange="handleChange">
          <pg-checkbox :value="'美國隊長'">美國隊長</pg-checkbox>
          <pg-checkbox :value="'鷹眼'" disabled>鷹眼</pg-checkbox>
          <pg-checkbox :value="'奇異博士'">奇異博士</pg-checkbox>
          <pg-checkbox :value="'選中且禁用'" disabled>選中且禁用</pg-checkbox>
        </pg-checkbox-group>
      </div>
      <div class="mt-3" style="color: #999999">
        我最愛的超級英雄： {{ checkList }}
      </div>
    </div>
    <h3 class="section-title">按鈕樣式的單選框組</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-checkbox-group v-model="favoriteHero1">
          <pg-checkbox :value="'獵豹'" button>獵豹</pg-checkbox>
          <pg-checkbox :value="'黑寡婦'" button>黑寡婦</pg-checkbox>
          <pg-checkbox :value="'浩克'" button>浩克</pg-checkbox>
        </pg-checkbox-group>
      </div>
      <div class="mt-3 mb-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero1 }}
      </div>
      <div class="section-insect">
        <pg-checkbox-group v-model="favoriteHero2" size="medium">
          <pg-checkbox :value="'獵豹'" button>獵豹</pg-checkbox>
          <pg-checkbox :value="'黑寡婦'" button>黑寡婦</pg-checkbox>
          <pg-checkbox :value="'浩克'" disabled button>浩克</pg-checkbox>
        </pg-checkbox-group>
      </div>
      <div class="mt-3 mb-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero2 }}
      </div>
      <div class="section-insect">
        <pg-checkbox-group v-model="favoriteHero3" size="small">
          <pg-checkbox :value="'獵豹'" button>獵豹</pg-checkbox>
          <pg-checkbox :value="'黑寡婦'" button>黑寡婦</pg-checkbox>
          <pg-checkbox :value="'浩克'" button>浩克</pg-checkbox>
        </pg-checkbox-group>
      </div>
      <div class="mt-3 mb-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero3 }}
      </div>
      <div class="section-insect">
        <pg-checkbox-group v-model="favoriteHero4" size="mini" disabled>
          <pg-checkbox :value="'獵豹'" button>獵豹</pg-checkbox>
          <pg-checkbox :value="'黑寡婦'" button>黑寡婦</pg-checkbox>
          <pg-checkbox :value="'浩克'" button>浩克</pg-checkbox>
        </pg-checkbox-group>
      </div>
      <div class="mt-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero4 }}
      </div>
    </div>

    <h3 class="section-title">Checkbox Attributes</h3>
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

    <h3 class="section-title">Checkbox Methods</h3>
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
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { attributeOptions, methodOptions } from '@/utils/descript.js';
export default defineComponent({
  props: {
    msg: {
      type: String
    }
  },
  setup(props) {
    const favoriteHero1 = ref([]);
    const favoriteHero2 = ref([]);
    const favoriteHero3 = ref([]);
    const favoriteHero4 = ref([]);
    const checked = ref(false);
    const checked1 = ref(false);
    const checked2 = ref(true);
    const checkList = ref(['奇異博士', '選中且禁用']);
    const attributes = reactive([
      {
        param: 'v-model',
        desc: '雙向綁定值',
        type: 'string / number / boolean',
        options: '-',
        defalt: '—'
      },
      {
        param: 'label',
        desc: 'radio 顯示的內容，若是 slot 沒有會優先才會抓這個',
        type: '',
        options: 'primary / success / warning / danger / info / text',
        defalt: '—'
      },
      {
        param: 'value',
        desc: 'radio 的 value, vue 3 之後 v-model customer 已經改成 modelValue',
        type: 'string / number / boolean',
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
        param: 'button',
        desc: '是否為按鈕樣式',
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
      }
    ]);
    const methods = reactive([
      {
        param: '選中的 radio 原生 event',
        desc: '綁定值變化時會觸發的事件',
        name: 'change'
      }
    ]);
    const handleChange = (e) => {
      console.log(e);
    };
    return {
      attributes,
      methods,
      attributeOptions,
      methodOptions,
      favoriteHero1,
      favoriteHero2,
      favoriteHero3,
      favoriteHero4,
      checked,
      checked1,
      checked2,
      handleChange,
      checkList
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
