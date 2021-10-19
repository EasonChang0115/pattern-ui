<template>
  <div class="pattern_ui_navMenu">
    <h2 class="page-title">NavMenu 導航菜單</h2>
    <p class="description">為網站提供導航功能的菜單</p>
    <h3 class="section-title">頂欄</h3>
    <p class="description">最基本的用法</p>
    <div class="section-block">
      <pg-menu
        :default-active="activeIndex"
        class="gl-menu-demo1"
        mode="horizontal"
        @select="handleSelect"
      >
        <pg-menu-item index="1">處理中心</pg-menu-item>
        <pg-sub-menu index="2">
          <template #title>我的工作台</template>
          <pg-menu-item index="2-1">选项1</pg-menu-item>
          <pg-menu-item index="2-2">选项2</pg-menu-item>
          <pg-menu-item index="2-3">选项3</pg-menu-item>
          <pg-sub-menu index="2-4">
            <template #title>选项4</template>
            <pg-menu-item index="2-4-1">选项1</pg-menu-item>
            <pg-menu-item index="2-4-2">选项2</pg-menu-item>
            <pg-menu-item index="2-4-3">选项3</pg-menu-item>
          </pg-sub-menu>
        </pg-sub-menu>
        <pg-menu-item index="3">打版中心</pg-menu-item>
        <pg-menu-item index="4">消息中心</pg-menu-item>
        <pg-menu-item index="5" disabled>訂單管理</pg-menu-item>
      </pg-menu>
    </div>
    <br />
    <br />
    <div class="section-block">
      <pg-menu
        :default-active="activeIndex"
        class="gl-menu-demo2"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <pg-menu-item index="1">處理中心</pg-menu-item>
        <pg-sub-menu index="2">
          <template #title>我的工作台</template>
          <pg-menu-item index="2-1">选项1</pg-menu-item>
          <pg-menu-item index="2-2">选项2</pg-menu-item>
          <pg-menu-item index="2-3">选项3</pg-menu-item>
          <pg-sub-menu index="2-4">
            <template #title>选项4</template>
            <pg-menu-item index="2-4-1">选项1</pg-menu-item>
            <pg-menu-item index="2-4-2">选项2</pg-menu-item>
            <pg-menu-item index="2-4-3">选项3</pg-menu-item>
          </pg-sub-menu>
        </pg-sub-menu>
        <pg-menu-item index="3">打版中心</pg-menu-item>
        <pg-menu-item index="4">消息中心</pg-menu-item>
        <pg-menu-item index="5" disabled>訂單管理</pg-menu-item>
      </pg-menu>
    </div>
    <div class="section-information">
      導航菜單默認為垂直模式，通過 mode
      屬性可以使導航菜單變更為水平模式。另外，菜單在中通過 submenu
      組件可以生成二級菜單。菜單還提供了 background-color，text-color 和
      active-text-color，分別用於設置菜單的背景色，菜單的文字顏色和當前激活菜單的文字顏色。
    </div>
    <h3 class="section-title">側欄</h3>
    <p class="description">垂直菜單，可內嵌子菜單。</p>
    <div class="section-block row">
      <div class="col-6">
        <h4>默認風格</h4>
        <pg-menu
          default-active="2"
          class="gl-menu-demo3"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose"
        >
          <pg-sub-menu index="1">
            <template #title>
              <i class="pg-icon-side-menu-craft"></i>
              <span>工藝單</span>
            </template>
            <pg-menu-item-group>
              <template #title>分组一</template>
              <pg-menu-item index="1-1">选项1</pg-menu-item>
              <pg-menu-item index="1-2">选项2</pg-menu-item>
            </pg-menu-item-group>
            <pg-menu-item-group title="分组2">
              <pg-menu-item index="1-3">选项3</pg-menu-item>
            </pg-menu-item-group>
            <pg-sub-menu index="1-4">
              <template #title>选项4</template>
              <pg-menu-item index="1-4-1">选项1</pg-menu-item>
            </pg-sub-menu>
          </pg-sub-menu>
          <pg-menu-item index="2">
            <i class="pg-icon-side-menu-reference"></i>
            <template #title>計算工具</template>
          </pg-menu-item>
          <pg-menu-item index="3">
            <i class="pg-icon-side-menu-size"></i>
            <template #title>尺寸</template>
          </pg-menu-item>
          <pg-menu-item index="4" disabled>
            <i class="pg-icon-side-menu-fabric"></i>
            <template #title>面料</template>
          </pg-menu-item>
        </pg-menu>
      </div>
      <div class="col-6">
        <h4>自定義風格</h4>
        <pg-menu
          default-active="4"
          class="gl-menu-demo4"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <pg-sub-menu index="1">
            <template #title>
              <i class="pg-icon-side-menu-craft"></i>
              <span>工藝單</span>
            </template>
            <pg-menu-item-group>
              <template #title>分组一</template>
              <pg-menu-item index="1-1">选项1</pg-menu-item>
              <pg-menu-item index="1-2">选项2</pg-menu-item>
            </pg-menu-item-group>
            <pg-menu-item-group title="分组2">
              <pg-menu-item index="1-3">选项3</pg-menu-item>
            </pg-menu-item-group>
            <pg-sub-menu index="1-4">
              <template #title>选项4</template>
              <pg-menu-item index="1-4-1">选项1</pg-menu-item>
            </pg-sub-menu>
          </pg-sub-menu>
          <pg-menu-item index="2">
            <i class="pg-icon-side-menu-reference"></i>
            <template #title>計算工具</template>
          </pg-menu-item>
          <pg-menu-item index="3">
            <i class="pg-icon-side-menu-size"></i>
            <template #title>尺寸</template>
          </pg-menu-item>
          <pg-menu-item index="4" disabled>
            <i class="pg-icon-side-menu-fabric"></i>
            <template #title>面料</template>
          </pg-menu-item>
        </pg-menu>
      </div>
    </div>
    <div class="section-information">
      通過 el-menu-item-group 組件可以實現菜單進行分組，分組名可以通過 title
      屬性直接設置，也可以通過具名 slot 來設置。
    </div>
    <br />
    <br />
    <h3 class="section-title">折疊</h3>
    <div class="section-block row">
      <div class="col-2 mb-3">
        <pg-button type="info" @click="isCollapse = !isCollapse">{{
          isCollapse ? "展開" : "收起"
        }}</pg-button>
      </div>
      <br />
      <div class="col-12">
        <pg-menu
          default-active="2-3"
          class="gl-menu-demo4"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <pg-menu-item index="1">
            <i class="pg-icon-side-menu-reference"></i>
            <template #title>計算工具</template>
          </pg-menu-item>
          <pg-sub-menu index="2">
            <template #title>
              <i class="pg-icon-side-menu-craft"></i>
              <span>工藝單</span>
            </template>
            <pg-menu-item-group>
              <template #title>分组一</template>
              <pg-menu-item index="2-1">选项1</pg-menu-item>
              <pg-menu-item index="2-2">选项2</pg-menu-item>
            </pg-menu-item-group>
            <pg-menu-item-group title="分组2">
              <pg-menu-item index="2-3">选项3</pg-menu-item>
            </pg-menu-item-group>
            <pg-sub-menu index="2-4">
              <template #title>选项4</template>
              <pg-menu-item index="2-4-1">选项1</pg-menu-item>
            </pg-sub-menu>
          </pg-sub-menu>
          <pg-menu-item index="3">
            <i class="pg-icon-side-menu-size"></i>
            <template #title>尺寸</template>
          </pg-menu-item>
          <pg-menu-item index="4" disabled>
            <i class="pg-icon-side-menu-fabric"></i>
            <template #title>面料</template>
          </pg-menu-item>
        </pg-menu>
      </div>
    </div>
    <div class="section-information">通過 collapse 屬性來設置折疊開關。</div>
    <h3 class="section-title">Menu Attribute</h3>
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
          <tr v-for="item in menuAttributes" :key="item.param">
            <td v-for="tool in Object.keys(item)" :key="tool + item.param">
              {{ item[tool] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="section-title">Menu Methods</h3>
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
          <tr v-for="item in menuMethods" :key="item.param">
            <td v-for="tool in Object.keys(item)" :key="tool + item.param">
              {{ item[tool] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="section-title">subMenu Attribute</h3>
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
          <tr v-for="item in subMenuAttributes" :key="item.param">
            <td v-for="tool in Object.keys(item)" :key="tool + item.param">
              {{ item[tool] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="section-title">menuItem Attribute</h3>
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
          <tr v-for="item in menuItemAttributes" :key="item.param">
            <td v-for="tool in Object.keys(item)" :key="tool + item.param">
              {{ item[tool] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="section-title">menuGroup Attribute</h3>
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
          <tr v-for="item in menuGroupAttributes" :key="item.param">
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
  setup() {
    const isCollapse = ref(false);
    const activeIndex = ref('1');
    const menuAttributes = reactive([
      {
        param: 'mode',
        desc: '模式',
        type: 'string',
        options: 'horizontal / vertical',
        defalt: 'vertical'
      },
      {
        param: 'collapse',
        desc: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
        type: 'boolean',
        options: '-',
        defalt: 'false'
      },
      {
        param: 'background-color',
        desc: '菜单的背景色（仅支持 hex 格式）',
        type: 'string',
        options: '—',
        defalt: '#ffffff'
      },
      {
        param: 'text-color',
        desc: '菜单的文字颜色（仅支持 hex 格式）',
        type: 'string',
        options: '—',
        defalt: '$font-colot'
      },
      {
        param: 'active-text-color',
        desc: '当前激活菜单的文字颜色（仅支持 hex 格式)',
        type: 'string',
        options: '—',
        defalt: '$primary'
      },
      {
        param: 'default-active',
        desc: '当前激活菜单的 index',
        type: 'string',
        options: '—',
        defalt: '-'
      },
      {
        param: 'collapse-transition',
        desc: '是否开启折叠动画',
        type: 'boolean',
        options: '—',
        defalt: 'true'
      },
      {
        param: 'menu-trigger',
        desc: '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)',
        type: 'string',
        options: 'hover / click',
        defalt: 'hover'
      }
    ]);
    const subMenuAttributes = reactive([
      {
        param: 'index',
        desc: '唯一標示',
        type: 'string / null',
        options: '-',
        defalt: 'null'
      },
      {
        param: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        options: '-',
        defalt: 'false'
      }
    ]);
    const menuItemAttributes = reactive([
      {
        param: 'index',
        desc: '唯一標示',
        type: 'string / null',
        options: '-',
        defalt: 'null'
      },
      {
        param: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        options: '-',
        defalt: 'false'
      }
    ]);
    const menuGroupAttributes = reactive([
      {
        param: 'title',
        desc: '分組標題',
        type: 'string',
        options: '-',
        defalt: '-'
      }
    ]);
    const menuMethods = reactive([
      {
        param: 'index: 选中菜单项的 index, indexPath: 选中菜单项的 index path',
        desc: '菜單被選擇時會觸發的方法',
        name: 'select'
      },
      {
        param:
          'index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path',
        desc: 'sub-menu 展开的回调',
        name: 'open'
      }
    ]);
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      attributeOptions,
      methodOptions,
      menuAttributes,
      menuItemAttributes,
      menuGroupAttributes,
      menuMethods,
      subMenuAttributes,
      isCollapse,
      activeIndex,
      handleSelect,
      handleOpen,
      handleClose
    };
  }
});
</script>

<style lang="scss" scoped>
.pattern_ui_navMenu {
  margin-bottom: 100px;
}
.gl-menu-demo1 {
  z-index: 100;
}
.gl-menu-demo1,
.gl-menu-demo2 {
  padding-inline-start: 40px;
}
h4 {
  margin: 15px 20px;
  width: 100%;
  color: $gray-600;
  font-size: 1.2rem;
  letter-spacing: 2px;
}
</style>
