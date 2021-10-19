<template>
  <div class="pg-dialog__alert">
    <div class="pg-dialog__alert__content">
      <div v-if="iconShow" class="icon">
        <img v-if="type === 'primary'" src="@/assets/success.png" alt="">
        <img v-if="type === 'success'" src="@/assets/prompt.png" alt="">
        <img v-if="type === 'danger'" src="@/assets/error.png" alt="">
      </div>
      <div class="text">
        {{ text }}
      </div>
      <div v-if="html && html !== ''" class="html" v-html="html"></div>
    </div>
    <div
      v-if="alertMode === 'confirm'" class="pg-dialog__alert__footer confirm"
    >
      <pg-button
        :type="type"
        size="mini"
        @click="handleConfirm"
      >
        {{ confirmText }}
      </pg-button>
      <pg-button @click="handleCancel" size="mini">{{ cancelText }}</pg-button>
    </div>
    <div v-else class="pg-dialog__alert__footer">
      <pg-button
        v-if="showComfirmBtn"
        :type="type"
        size="mini"
        @click="handleConfirm"
      >
        {{ confirmText }}
      </pg-button>
      <pg-button
        v-if="showCancelBtn"
        @click="handleCancel"
        size="mini"
      >
        {{ cancelText }}
      </pg-button>
    </div>
  </div>
</template>

<script>
import PgButton from '@/components/button';
export default {
  name: 'PgDialogAlert',
  components: {
    PgButton
  },
  props: {
    alertMode: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    text: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: null
    },
    iconShow: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String
    },
    cancelText: {
      type: String
    },
    showComfirmBtn: {
      type: Boolean
    },
    showCancelBtn: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    const handleConfirm = () => {
      emit('confirm');
    };
    const handleCancel = () => {
      emit('cancel');
    };
    return {
      handleCancel,
      handleConfirm
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/alert.scss';
</style>
