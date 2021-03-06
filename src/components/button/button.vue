<template>
  <button
    :class="[
      'pg-button',
      type ? 'pg-button--' + type : '',
      buttonSize ? 'pg-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="loading" :style="{ backgroundImage: `url(${loadingImg})` }"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { isValidComponentSize } from '@/utils/validators';
import loadingSvg from './loadingSVG.js';
export default defineComponent({
  name: 'PgButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: val => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text'
        ].includes(val);
      }
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: val => {
        return ['button', 'submit', 'reset'].includes(val);
      }
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  emits: ['click'],
  setup(props, ctx) {
    const loadingImg = ref(loadingSvg());
    const buttonSize = computed(() => {
      return props.size;
    });
    const buttonDisabled = computed(() => {
      return props.disabled;
    });
    // methods
    const handleClick = evt => {
      ctx.emit('click', evt);
    };
    return {
      loadingImg,
      buttonSize,
      buttonDisabled,
      handleClick
    };
  }
});
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
