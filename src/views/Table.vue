<template>
  <div class="message-demo-page">
    <h2 class="page-title">Table 表格</h2>

    <h3 class="section-title">基本用法</h3>
    <div class="section-block table">
      <div class="section-insect">
        <pg-table :data="userList">
          <pg-table-column label="姓名" prop="name" align="center"></pg-table-column>
          <pg-table-column label="性别" prop="sex" align="center">
            <template #default="row" align="center">
              {{ row.sex === 1 ? '男' : '女' }}
            </template>
          </pg-table-column>
          <pg-table-column label="年龄" prop="age" align="center"></pg-table-column>
          <pg-table-column label="手机号码" prop="phoneNumber" align="center"></pg-table-column>
        </pg-table>
      </div>
    </div>

    <h3 class="section-title">代码</h3>
    <code-highlight :code="basicCode" />

    <h3 class="section-title">加载状态</h3>
    <div class="section-block">
      <pg-button size="mini" @click="loading = !loading">切换加载状态</pg-button>
      <br />
      <div class="section-insect">
        <pg-table :data="userList" :loading="loading">
          <pg-table-column label="姓名" prop="name" align="center"></pg-table-column>
          <pg-table-column label="性别" prop="sex" align="center">
            <template #default="row" align="center">
              {{ row.sex === 1 ? '男' : '女' }}
            </template>
          </pg-table-column>
          <pg-table-column label="年龄" prop="age" align="center"></pg-table-column>
          <pg-table-column label="手机号码" prop="phoneNumber" align="center"></pg-table-column>
        </pg-table>
      </div>
    </div>
    <h3 class="section-title">代码</h3>
    <code-highlight :code="loadingCode" />

    <h3 class="section-title">多选操作</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-table :data="userList" selection @select-change="selectChange">
          <pg-table-column label="姓名" prop="name"></pg-table-column>
          <pg-table-column label="性别" prop="sex">
            <template #default="row">
              {{ row.sex === 1 ? '男' : '女' }}
            </template>
          </pg-table-column>
          <pg-table-column label="年龄" prop="age"></pg-table-column>
          <pg-table-column label="手机号码" prop="phoneNumber"></pg-table-column>
        </pg-table>
      </div>
    </div>
    <h3 class="section-title">代码</h3>
    <code-highlight :code="selectionCode" />

    <attributes-viewer title="表格属性" :attributes="tableAttributes" />
    <attributes-viewer title="表列属性" :attributes="columnAttributes" />
    <methods-viewer title="表列 slot" :methods="methods" />
  </div>
</template>

<script>
import basicCode from '@/code/table/basic.js';
import loadingCode from '@/code/table/loading.js';
import selectionCode from '@/code/table/selection.js';
import { reactive, ref } from 'vue';
import PgMessage from '@/components/message';

export default {
  setup() {
    const userList = reactive([
      {
        name: '张三',
        sex: 1,
        age: 18,
        phoneNumber: '13712345678'
      },
      {
        name: '李四',
        sex: 0,
        age: 20,
        phoneNumber: '13712345678'
      },
      {
        name: '王五',
        sex: 1,
        age: 16,
        phoneNumber: '13712345678'
      },
      {
        name: '赵六',
        sex: 0,
        age: 24,
        phoneNumber: '13712345678'
      }
    ]);

    const loading = ref(false);
    function selectChange(selected) {
      const names = selected.map(row => row.name).join(',');
      PgMessage.success(names ? `选中了: ${names}` : '没有选中项了');
    }

    const tableAttributes = [
      {
        param: 'data',
        desc: '表格数据',
        type: 'array',
        options: '-',
        defalt: '[]'
      },
      {
        param: 'loading',
        desc: '加载状态',
        type: 'boolean',
        options: 'true / false',
        defalt: 'false'
      },
      {
        param: 'selection',
        desc: '是否开启多选操作',
        type: 'boolean',
        options: 'true / false',
        defalt: 'false'
      }
    ];

    const columnAttributes = [
      {
        param: 'label',
        desc: '列标题',
        type: 'string',
        options: '-',
        defalt: ''
      },
      {
        param: 'prop',
        desc: '对应列内容的字段名',
        type: 'string',
        options: '-',
        defalt: ''
      },
      {
        param: 'align',
        desc: '列文本对齐方式',
        type: 'string',
        options: 'left / right / center',
        defalt: 'left'
      }
    ];

    const methods = [
      {
        name: 'default',
        desc: '自定义列的内容',
        param: 'row (每一行的数据)'
      }
    ];

    return {
      userList,
      loading,
      basicCode,
      loadingCode,
      selectionCode,
      tableAttributes,
      columnAttributes,
      methods,
      selectChange
    };
  }
};
</script>

<style lang="scss" scoped>
.section-block {
  background-color: white;
  margin-bottom: 20px;
}
</style>
