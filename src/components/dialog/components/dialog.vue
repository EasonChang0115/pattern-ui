<template>
  <teleport to="body">
    <div class="pg-dialog">
      <div v-show="maskShow && visible" class="pg-dialog__mask"></div>
      <transition name="dialog-fade">
        <div class="pg-dialog__wrapper" v-if="visible" :style="{ width, marginTop: top }">
          <!-- header -->
          <div class="pg-dialog__header">
            <span class="pg-dialog__title" v-if="title">{{ title }}</span>
            <i class="pg-dialog__icon pg-icon-close" @click="cancel"></i>
          </div>
          <div class="pg-dialog__content">
            <pg-alert
              v-if="mode === 'alert'"
              :alertMode="alertMode"
              :mode="mode"
              :type="alertType"
              :text="text"
              :html="html"
              :iconShow="alertIcon"
              :showComfirmBtn="showComfirmBtn"
              :showCancelBtn="showCancelBtn"
              :confirmText="confirmText"
              :cancelText="cancelText"
              @confirm="confirm"
              @cancel="cancel"
            />
            <pg-form
              v-if="mode === 'form'"
              :mode="mode"
              :form="form"
              :formType="formType"
              :text="text"
              :html="html"
              :showComfirmBtn="showComfirmBtn"
              :showCancelBtn="showCancelBtn"
              :confirmText="confirmText"
              :cancelText="cancelText"
              :errorText="errorText"
              @confirm="confirm"
              @cancel="cancel"
            />
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script>
import PgAlert from './alert';
import PgForm from './form';
export default {
  components: {
    PgAlert,
    PgForm
  },
  name: 'PgDialog',
  data() {
    return {
      // 客制化属性
      mode: 'form',
      visible: false,
      isClose: true,
      form: {},
      formType: [],
      title: '',
      text: '',
      errorText: '',
      width: '',
      top: '',
      alertType: '',
      alertIcon: false,
      maskShow: true,
      html: null,
      alertMode: 'default',
      showComfirmBtn: true,
      showCancelBtn: false,
      confirmText: '确定',
      cancelText: '取消'
    };
  },
  methods: {
    handleClose() {
      this.errorText = '';
      this.visible = false;
    },
    cancel() {},
    confirm() {
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/dialog.scss';
</style>
