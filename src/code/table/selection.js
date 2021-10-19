export default `
<template>
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

    function selectChange(selected) {
      const names = selected.map(row => row.name).join(',');
      PgMessage.success(names ? \`选中了: \${names}\` : '没有选中项了');
    }

    return {
      userList,
      selectChange
    };
  }
};
</script>
`;
