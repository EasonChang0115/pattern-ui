export default `
<template>
  <pg-button size="mini" @click="success">成功</pg-button>
  <pg-button size="mini" @click="warning">警告</pg-button>
  <pg-button size="mini" @click="error">错误</pg-button>
  <pg-button size="mini" @click="info">消息</pg-button>
</template>

<script>
// 单独引入
import { PgMessage } from 'pattern-design-ui';
import { getCurrentInstance, h } from 'vue';

export default {
  setup() {
    const { appContext } = getCurrentInstance();
    const success = () => PgMessage.success(h('p', null, '使用 VNode'));
    const warning = () => PgMessage.warning('这是一条警告的消息');
    const error = () => PgMessage.error('这是一条错误的消息');
    // 全局方法
    const info = () => appContext.config.globalProperties.$message.info('这是一条消息提示');
    
    return {
      success,
      warning,
      error,
      info
    };
  }
};
</script>
`;
