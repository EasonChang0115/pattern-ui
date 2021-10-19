export default `
<template>
  <pg-button size="mini" @click="advanced">消息提示</pg-button>
</template>

<script>
import { PgMessage } from 'pattern-design-ui';

export default {
  setup() {
    const advanced = () => PgMessage({
      type: 'success',
      message: '<i>这是一条成功的消息</i>',
      center: true, // 居中显示
      useHTML: true // 传入 HTML 片段
    });

    return {
      advanced
    };
  }
};
</script>
`;
