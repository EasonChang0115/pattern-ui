export default `
<template>
  <pg-button size="mini" @click="loading = !loading">切换加载状态</pg-button>
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
</template>

<script>
import { ref, reactive } from 'vue';

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

    return {
      userList,
      loading
    };
  }
};
</script>
`;
