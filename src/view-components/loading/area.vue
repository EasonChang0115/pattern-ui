<template>
  <h3 class="section-title">區域加載</h3>
  <div class="section-block">
    <div class="section-insect">
      <table class="table table-striped table-hover" v-loading="loading">
        <thead>
          <tr>
            <th>日期</th>
            <th>姓名</th>
            <th>地址</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td v-for="tool in Object.keys(item)" :key="tool.date">
              {{ item[tool] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="section-information">
      調用Loading的方法：指令和服務。對於自定義指令v-loading，只需要綁定Boolean即可。交替狀態下，Loading遮罩會插入到綁定元素的子body例程中，通過添加修飾符，可以使遮罩插入至DOM中的身體上。
    </div>
  </div>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true
      };
    }
  };
</script>
