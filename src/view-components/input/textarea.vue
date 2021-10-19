<template>
  <h3 class="section-title">Textarea</h3>
  <div class="section-block">
    <h4 class="mb-3">用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</h4>
    <div class="section-insect">
      <pg-input
        type="textarea"
        v-model="input"
        :rows="4"
        placeholder="請輸入內容"
        @change="handleChange"
      ></pg-input>
    </div>
    <div class="mt-3" style="color: #999999">
      輸入的內容 {{ input }}
    </div>
  </div>
  <div class="section-information">
    高度可以通過設定 rows 屬性控制。
  </div>
  <h3 class="section-title">可自適應高度的 Textarea</h3>
  <div class="section-block">
    <h4 class="mb-3">透過設定 autosize 可以使 textarea 根據文字高度自行調整，autosize也可以設置成一個對象，指定最大及最小行數。</h4>
    <div class="section-insect">
      <pg-input
        type="textarea"
        autosize
        v-model="input1"
        :rows="4"
        placeholder="請輸入內容"
        @change="handleChange"
      ></pg-input>
    </div>
    <div class="mt-3 mb-3" style="color: #999999">
      輸入的內容 {{ input1 }}
    </div>
    <div class="section-insect">
      <pg-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        v-model="input2"
        :rows="4"
        placeholder="請輸入內容"
        @change="handleChange"
      ></pg-input>
    </div>
     <div class="mt-3" style="color: #999999">
      輸入的內容 {{ input2 }}
    </div>
  </div>
</template>

<script>
import {
  ref
} from 'vue';
export default {
  setup: (props) => {
    const input = ref('');
    const input1 = ref('');
    const input2 = ref('');
    const handleChange = value => {
      console.log(value);
    };
    return {
      input,
      input1,
      input2,
      handleChange
    };
  }
};
</script>
