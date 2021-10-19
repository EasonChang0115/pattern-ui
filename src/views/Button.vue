<template>
  <div class="button-demo-page">
    <h2 class="page-title">Button 按鈕</h2>
    <p class="description">pattern 設計頁 按鈕操作</p>
    <h3 class="section-title">基本用法</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button>默认按钮</pg-button>
        <pg-button type="primary">主要按钮</pg-button>
        <pg-button type="success">成功按钮</pg-button>
        <pg-button type="info">信息按钮</pg-button>
        <pg-button type="warning">警告按钮</pg-button>
        <pg-button type="danger">危险按钮</pg-button>
      </div>
      <div class="section-insect">
        <pg-button plain>簡單按钮</pg-button>
        <pg-button type="primary" plain>主要按钮</pg-button>
        <pg-button type="success" plain>成功按钮</pg-button>
        <pg-button type="info" plain>信息按钮</pg-button>
        <pg-button type="warning" plain>警告按钮</pg-button>
        <pg-button type="danger" plain>危险按钮</pg-button>
      </div>
      <div class="section-insect">
        <pg-button round>圓角按钮</pg-button>
        <pg-button type="primary" round>主要按钮</pg-button>
        <pg-button type="success" round>成功按钮</pg-button>
        <pg-button type="info" round>信息按钮</pg-button>
        <pg-button type="warning" round>警告按钮</pg-button>
        <pg-button type="danger" round>危险按钮</pg-button>
      </div>
      <div class="section-insect">
        <pg-button circle icon="pg-icon-search-minus"></pg-button>
        <pg-button type="primary" circle icon="pg-icon-select"></pg-button>
        <pg-button type="success" circle icon="pg-icon-trash"></pg-button>
        <pg-button type="info" circle icon="pg-icon-preview-photo"></pg-button>
        <pg-button type="warning" circle icon="pg-icon-save"></pg-button>
        <pg-button type="danger" circle icon="pg-icon-search-plus"></pg-button>
      </div>
      <div class="section-information">
        使用 type、plain、round 和 circle 屬性來定義 Button 的樣式。
      </div>
    </div>
    <h3 class="section-title">禁用狀態</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button disabled>默认按钮</pg-button>
        <pg-button type="primary" disabled>主要按钮</pg-button>
        <pg-button type="success" disabled>成功按钮</pg-button>
        <pg-button type="info" disabled>信息按钮</pg-button>
        <pg-button type="warning" disabled>警告按钮</pg-button>
        <pg-button type="danger" disabled>危险按钮</pg-button>
      </div>
      <div class="section-insect">
        <pg-button plain disabled>簡單按钮</pg-button>
        <pg-button type="primary" plain disabled>主要按钮</pg-button>
        <pg-button type="success" plain disabled>成功按钮</pg-button>
        <pg-button type="info" plain disabled>信息按钮</pg-button>
        <pg-button type="warning" plain disabled>警告按钮</pg-button>
        <pg-button type="danger" plain disabled>危险按钮</pg-button>
      </div>
    </div>
    <h3 class="section-title">文字按钮</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button type="text">文字按钮</pg-button>
        <pg-button type="text" disabled>文字按钮</pg-button>
      </div>
    </div>
    <h3 class="section-title">圖標按钮</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button type="primary" icon="pg-icon-select"></pg-button>
        <pg-button type="success" icon="pg-icon-trash"></pg-button>
        <pg-button type="danger" icon="pg-icon-preview-photo">預覽</pg-button>
        <pg-button type="warning">儲存<i class="pg-icon-save"></i></pg-button>
      </div>
    </div>
    <h3 class="section-title">按钮組</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button-group>
          <pg-button type="primary"><i class="pg-icon-undo"></i>上一步</pg-button>
          <pg-button type="primary">下一步<i class="pg-icon-redo"></i></pg-button>
        </pg-button-group>
        <pg-button-group>
          <pg-button type="primary" icon="pg-icon-select"></pg-button>
          <pg-button type="success" icon="pg-icon-trash"></pg-button>
          <pg-button type="danger" icon="pg-icon-preview-photo"></pg-button>
        </pg-button-group>
      </div>
      <div class="section-information" v-text="msg"></div>
    </div>
    <h3 class="section-title">Loading</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button type="primary" :loading="true">加载中</pg-button>
      </div>
    </div>
    <h3 class="section-title">不同尺寸</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button>默认按钮</pg-button>
        <pg-button size="medium">中等按钮</pg-button>
        <pg-button size="small">小型按钮</pg-button>
        <pg-button size="mini">超小按钮</pg-button>
      </div>
      <div class="section-insect">
        <pg-button round>默认按钮</pg-button>
        <pg-button size="medium" round>中等按钮</pg-button>
        <pg-button size="small" round>小型按钮</pg-button>
        <pg-button size="mini" round>超小按钮</pg-button>
      </div>
    </div>
    <h3 class="section-title">Attributes</h3>
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
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { attributeOptions } from '@/utils/descript.js';

export default {
  setup() {
    const msg = ref('使用 <el-button-group> 標籤來嵌套按鈕');
    const attributes = reactive([
      {
        param: 'size',
        desc: '尺寸',
        type: 'string',
        options: 'medium / small / mini',
        defalt: '—'
      },
      {
        param: 'type',
        desc: '類型',
        type: 'string',
        options: 'primary / success / warning / danger / info / text',
        defalt: '—'
      },
      {
        param: 'plain',
        desc: '是否為樸素按鈕',
        type: 'boolean',
        options: '—',
        defalt: 'false'
      },
      {
        param: 'round',
        desc: '是否為圓角',
        type: 'boolean',
        options: '—',
        defalt: 'false'
      },
      {
        param: 'circle',
        desc: '是否為圓型',
        type: 'boolean',
        options: '—',
        defalt: 'false'
      },
      {
        param: 'loading',
        desc: '是否加載中',
        type: 'boolean',
        options: '—',
        defalt: 'false'
      },
      {
        param: 'disabled',
        desc: '是否進用狀態',
        type: 'boolean',
        options: '—',
        defalt: 'false'
      },
      {
        param: 'icon',
        desc: '圖示類型',
        type: 'string',
        options: '—',
        defalt: '—'
      },
      {
        param: 'autofocus',
        desc: '是否默認聚焦',
        type: 'boolean',
        options: '—',
        defalt: 'false'
      },
      {
        param: 'native-type',
        desc: '原生 type 屬性',
        type: 'string',
        options: 'button / submit / reset',
        defalt: 'button'
      }
    ]);
    return {
      attributeOptions,
      attributes,
      msg
    };
  }
};
</script>

<style lang="scss" scoped>
.button-demo-page {
  margin-bottom: 100px;
  [class*='#{$variable-prefix}icon-'] {
    margin: 0 5px;
  }
  .section-insect > * {
    margin-left: 8px;
    margin-top: 4px;
    margin-bottom: 16px;
  }
}
</style>
