<template>
  <div class="radio-demo-page mb-5">
    <h2 class="page-title">Radio 單選框</h2>
    <p class="description">在一組備選項中進行單選</p>
    <h3 class="section-title">基本用法</h3>
    <p class="description">若是選項過多，請用 select 進行選擇</p>
    <div class="section-block">
      <div class="section-insect">
        <pg-radio
          v-for="hero in heroList"
          :key="hero.value"
          :value="hero.value"
          v-model="favoriteHero"
          @change="handleChange"
          >{{ hero.value }}</pg-radio
        >
      </div>
      <div class="mt-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero }}
      </div>
    </div>
    <div class="section-information">
      使用 Radio 組件，只需要設置 v-model 綁定變量，選中代表變量的值為相應的
      value 值，value 可以是 String, Number, Boolean。
    </div>
    <h3 class="section-title">禁用狀態</h3>
    <p class="description">單選框不能被點選的狀態</p>
    <div class="section-block">
      <div class="section-insect">
        <pg-radio :value="'蜘蛛人'" v-model="disableExample" disabled
          >蜘蛛人</pg-radio
        >
        <pg-radio :value="'蟻人'" v-model="disableExample" disabled
          >蟻人</pg-radio
        >
      </div>
      <div class="mt-3" style="color: #999999">
        我最愛的超級英雄： {{ disableExample }}
      </div>
    </div>
    <h3 class="section-title">單選框組</h3>
    <p class="description">適用於在多個狀況下，很多不同組合的單選系列</p>
    <div class="section-block">
      <div class="section-insect">
        <pg-radio-group v-model="favoriteHero0" @change="handleChange">
          <pg-radio :value="'美國隊長'">美國隊長</pg-radio>
          <pg-radio :value="'鷹眼'">鷹眼</pg-radio>
          <pg-radio :value="'奇異博士'">奇異博士</pg-radio>
        </pg-radio-group>
      </div>
      <div class="mt-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero0 }}
      </div>
    </div>
    <h3 class="section-title">按鈕樣式的單選框組</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-radio-group v-model="favoriteHero1">
          <pg-radio :value="'獵豹'" button>獵豹</pg-radio>
          <pg-radio :value="'黑寡婦'" button>黑寡婦</pg-radio>
          <pg-radio :value="'浩克'" button>浩克</pg-radio>
        </pg-radio-group>
      </div>
      <div class="mt-3 mb-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero1 }}
      </div>
      <div class="section-insect">
        <pg-radio-group v-model="favoriteHero2" size="medium">
          <pg-radio :value="'獵豹'" button>獵豹</pg-radio>
          <pg-radio :value="'黑寡婦'" button>黑寡婦</pg-radio>
          <pg-radio :value="'浩克'" disabled button>浩克</pg-radio>
        </pg-radio-group>
      </div>
      <div class="mt-3 mb-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero2 }}
      </div>
      <div class="section-insect">
        <pg-radio-group v-model="favoriteHero3" size="small">
          <pg-radio :value="'獵豹'" button>獵豹</pg-radio>
          <pg-radio :value="'黑寡婦'" button>黑寡婦</pg-radio>
          <pg-radio :value="'浩克'" button>浩克</pg-radio>
        </pg-radio-group>
      </div>
      <div class="mt-3 mb-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero3 }}
      </div>
      <div class="section-insect">
        <pg-radio-group v-model="favoriteHero4" size="mini" disabled>
          <pg-radio :value="'獵豹'" button>獵豹</pg-radio>
          <pg-radio :value="'黑寡婦'" button>黑寡婦</pg-radio>
          <pg-radio :value="'浩克'" button>浩克</pg-radio>
        </pg-radio-group>
      </div>
      <div class="mt-3" style="color: #999999">
        我最愛的超級英雄： {{ favoriteHero4 }}
      </div>
    </div>

    <h3 class="section-title">Radio Attributes</h3>
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

    <h3 class="section-title">Radio Methods</h3>
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
  setup: (props) => {
    const favoriteHero = ref('');
    const heroList = [
      { value: '神力女超人' },
      { value: '雷神索爾' },
      { value: '鋼鐵人' }
    ];
    const disableExample = ref('');
    const favoriteHero1 = ref('浩克');
    const favoriteHero2 = ref('獵豹');
    const favoriteHero3 = ref('黑寡婦');
    const favoriteHero4 = ref('');
    const favoriteHero0 = ref('');
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
      console.log(e.target.value);
    };
    return {
      attributeOptions,
      methodOptions,
      attributes,
      methods,
      disableExample,
      heroList,
      favoriteHero,
      favoriteHero0,
      favoriteHero1,
      favoriteHero2,
      favoriteHero3,
      favoriteHero4,
      handleChange
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
