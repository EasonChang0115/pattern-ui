<template>
  <transition name="pg-message-fade" @before-leave="$emit('close')" @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      :class="['pg-message', className, { 'pg-message--center': center }]"
      :style="{ top: `${offset}px`, zIndex }"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <img v-if="type === 'success'" class="pg-message-icon" src="@/assets/message-success.png" alt="" />
      <img v-if="type === 'warning'" class="pg-message-icon" src="@/assets/message-warning.png" alt="" />
      <img v-if="type === 'error'" class="pg-message-icon" src="@/assets/message-error.png" alt="" />
      <img v-if="type === 'info'" class="pg-message-icon" src="@/assets/message-info.png" alt="" />
      <slot>
        <p v-if="!useHTML">{{ message }}</p>
        <p v-else v-html="message"></p>
      </slot>
      <div class="pg-message--close" @click="close">
        <i class="pg-icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed, onMounted, ref } from 'vue';

export default {
  name: 'PgMessage',
  props: {
    id: { type: String, default: '' },
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: [String, Object],
      default: ''
    },
    offset: {
      type: Number,
      default: 20
    },
    zIndex: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 3000
    },
    center: {
      type: Boolean,
      default: false
    },
    useHTML: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const className = computed(() => `pg-message--${props.type}`);
    const visible = ref(false);
    let timer = null;

    function close() {
      visible.value = false;
      clearTimer();
    }
    function startTimer() {
      if (props.duration > 0) {
        timer = setTimeout(() => close(), props.duration);
      }
    }
    function clearTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }

    onMounted(() => {
      startTimer();
      visible.value = true;
    });

    return {
      close,
      className,
      visible,
      startTimer,
      clearTimer
    };
  }
};
</script>

<style lang="scss">
@import '../scss/message.scss';
</style>
