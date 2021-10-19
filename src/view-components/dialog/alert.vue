<template>
  <h3 class="section-title">alert 用法</h3>
  <div class="section-block">
    <h4 class="mb-3">用於警告或是確定內容的警示框。</h4>
    <div class="section-insect">
      <pg-button type="primary" size="small" @click="btnclickSuccess">成功</pg-button>
      <pg-button type="success" size="small" @click="btnclickInfo">提示</pg-button>
      <pg-button type="danger" size="small" @click="btnclickError">失敗</pg-button>
      <pg-button type="primary" size="small" @click="btnclickHTML">HTML 片段</pg-button>
      <pg-button type="danger" size="small" @click="btnClickCheck">確認刪除</pg-button>
      <pg-button type="primary" size="small" @click="btnclickcustom">自定義文字按鈕</pg-button>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
  setup: props => {
    const { proxy } = getCurrentInstance();
    const btnclickSuccess = () => {
      proxy.$dialog.success({ text: '新增成功' });
    };
    const btnclickInfo = () => {
      proxy.$dialog.prompt({ text: '新增成功' });
    };
    const btnclickError = () => {
      proxy.$dialog.error({ text: '新增失败' });
    };
    const btnclickHTML = () => {
      proxy.$dialog.success({
        text: '支付成功',
        html: '<strong>这是 <i>HTML</i> 片段</strong>'
      });
    };
    const btnClickCheck = () => {
      proxy.$dialog.confirm({
        text: '是否删除?',
        type: 'danger',
        callback: () => {
          console.log('确认删除');
        }
      });
    };
    const btnclickcustom = () => {
      proxy.$dialog({
        mode: 'alert',
        title: '',
        alertMode: 'confirm',
        alertType: 'success',
        text: '是否新增设计?',
        hideMask: true,
        showIcon: true,
        html: '<strong>这是 <i>HTML</i> 片段</strong>',
        showComfirmBtn: true, // 按钮的确认是否显示
        showCancelBtn: true, // 按钮的取消是否显示
        confirmText: '是', // 确认按钮的文字
        cancelText: '否', // 取消按钮的文字
        confirmfunction: () => {
          console.log('点击是');
        },
        cancelfunction: () => {
          console.log('点击否');
        }
      });
    };
    return {
      btnclickSuccess,
      btnclickInfo,
      btnclickError,
      btnclickHTML,
      btnClickCheck,
      btnclickcustom
    };
  }
};
</script>

<style lang="scss" scoped>
.section-insect {
  :deep(button) {
    margin-right: 8px;
  }
}
</style>
