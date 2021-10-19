<template>
  <div class="message-demo-page">
    <h2 class="page-title">Message 消息提示</h2>

    <h3 class="section-title">基本用法</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button size="mini" @click="success">成功</pg-button>
        <pg-button size="mini" @click="warning">警告</pg-button>
        <pg-button size="mini" @click="error">错误</pg-button>
        <pg-button size="mini" @click="info">消息</pg-button>
      </div>
    </div>

    <h3 class="section-title">代码</h3>
    <code-highlight :code="basicCode" />

    <h3 class="section-title">对象方式</h3>
    <div class="section-block">
      <div class="section-insect">
        <pg-button size="mini" @click="advanced">消息提示</pg-button>
      </div>
    </div>
    <h3 class="section-title">代码</h3>
    <code-highlight language="javascript" :code="advancedCode" />

    <attributes-viewer :attributes="attributes" />
    <methods-viewer :methods="methods" />
  </div>
</template>

<script>
import { getCurrentInstance, h } from 'vue';
import PgMessage from '@/components/message';
import basicCode from '@/code/message/basic.js';
import advancedCode from '@/code/message/advanced.js';

export default {
  setup() {
    const { appContext } = getCurrentInstance();
    const success = () => PgMessage.success(h('p', null, '使用 VNode'));
    const warning = () => PgMessage.warning('这是一条警告的消息');
    const error = () => PgMessage.error('这是一条错误的消息');
    const info = () => appContext.config.globalProperties.$message.info('这是一条消息提示');
    const advanced = () => PgMessage({
      type: 'success',
      message: '<i>这是一条成功的消息</i>',
      center: true, // 居中显示
      useHTML: true // 传入 HTML 片段
    });

    const attributes = [
      {
        param: 'type',
        desc: '样式类型',
        type: 'string',
        options: 'success / warning / error / info',
        defalt: 'info'
      },
      {
        param: 'message',
        desc: '提示内容',
        type: 'string / VNode',
        options: '-',
        defalt: ''
      },
      {
        param: 'useHTML',
        desc: '是否以 HTML 的方式渲染 message',
        type: 'boolean',
        options: 'true / false',
        defalt: 'false'
      },
      {
        param: 'center',
        desc: '是否居中显示 message 的内容',
        type: 'boolean',
        options: 'true / false',
        defalt: 'false'
      }
    ];

    const methods = [
      {
        name: 'close',
        desc: '关闭当前的 Message，调用 $message / PgMessage 方法返回的实例中的方法',
        param: '-'
      },
      {
        name: 'closeAll',
        desc: '关闭所有的 Message，PgMessage 的方法',
        param: '-'
      }
    ];

    return {
      success,
      warning,
      error,
      info,
      advanced,
      basicCode,
      advancedCode,
      attributes,
      methods
    };
  }
};
</script>

<style lang="scss" scoped>
.message-demo-page {
  margin-bottom: 20px;
}
.section-insect {
  > * {
    margin-right: 10px;
  }
}
</style>
