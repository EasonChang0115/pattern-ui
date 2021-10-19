<template>
  <div
    :class="[
      type === 'textarea' ? 'pg-textarea' : 'pg-input',
      inputSize ? 'pg-input--' + inputSize : '',
      {
        'pg-input--prefix': $slots.prefix || prefixIcon,
        'pg-input--suffix': $slots.suffix || suffixIcon,
        'pg-input-group': $slots.prepend || $slots.append,
        'pg-input-group--append': $slots.append,
        'pg-input-group--prepend': $slots.prepend,
        'is-disabled': inputDisabled,
        'is-hovering': hovering
      },
      $attrs.class
    ]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div v-if="$slots.prepend" class="pg-input-group__prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        ref="input"
        class="pg-input__inner"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled || readonly"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :aria-label="label"
        :placeholder="placeholder"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @change.stop="handleChange"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @mousewheel="handleMouseWheel"
      />
      <!-- 單位 -->
      <div class="pg-input__unit" v-if="unit">{{ unit }}</div>
      <!-- 前置内容 -->
      <span v-if="$slots.prefix || prefixIcon" class="pg-input__prefix">
        <slot name="prefix"></slot>
        <i v-if="prefixIcon" :class="['pg-input__icon', prefixIcon]"></i>
      </span>
      <!-- 後綴內容 -->
      <span v-if="getSuffixVisible()" class="pg-input__suffix">
        <template v-if="!showPwdVisible">
          <slot name="suffix"></slot>
          <i v-if="suffixIcon" :class="['pg-input__icon', suffixIcon]"></i>
        </template>
        <i v-if="showPwdVisible" class="pg-input__icon pg-icon-view" @click="handlePasswordVisible"></i>
      </span>
      <!-- 後置元素 -->
      <div v-if="$slots.append" class="pg-input-group__append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      ref="textarea"
      class="pg-textarea__inner"
      :style="textareaStyle"
      :rows="rows"
      :tabindex="tabindex"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :aria-label="label"
      :placeholder="placeholder"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @change.stop="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeydown"
    >
    </textarea>
  </div>
</template>

<script>
import { ref, defineComponent, computed, nextTick, shallowRef, watch, onUpdated, onMounted } from 'vue';
import calcTextareaHeight from '../utils/calcTextareaHeight';
import { isValidComponentSize } from '@/utils/validators.js';
function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
export default defineComponent({
  name: 'PgInput',
  inheritAttrs: false,
  props: {
    unit: {
      type: String
    },
    placeholder: {
      type: String
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: val => ['on', 'off'].includes(val)
    },
    tabindex: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    rows: {
      type: Number
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    resize: {
      type: String,
      validator: val => ['none', 'both', 'horizontal', 'vertical'].includes(val)
    },
    step: {
      type: Number,
      default: 1
    }
  },
  setup(props, { emit, slots }) {
    // data
    const input = ref(null);
    const textarea = ref(null);
    const hovering = ref(false); // 用於 mouse enter leave 的時候 但是目前還沒有實作真正的樣式在 input 上
    const passwordVisible = ref(false);
    const focused = ref(false);
    const isComposing = ref(false);
    const textareaStyle = computed(() => ({
      ..._textareaCalcStyle.value,
      resize: props.resize
    }));
    // computed
    const _textareaCalcStyle = shallowRef({});
    const inputOrTextarea = computed(() => input.value || textarea.value);
    const inputSize = computed(() => props.size);
    const inputDisabled = computed(() => props.disabled);
    const nativeInputValue = computed(() => (props.modelValue === null || props.modelValue === undefined ? '' : String(props.modelValue)));
    const showPwdVisible = computed(() => {
      return props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value);
    });
    // methods
    const focus = () => {
      nextTick(() => {
        inputOrTextarea.value.focus();
      });
    };
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (type !== 'textarea') return;
      if (autosize) {
        const minRows = typeof autosize === 'object' ? autosize.minRows : null;
        const maxRows = typeof autosize === 'object' ? autosize.maxRows : null;
        _textareaCalcStyle.value = calcTextareaHeight(textarea.value, minRows, maxRows);
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input = inputOrTextarea.value;
      if (!input || input.value === nativeInputValue.value) return;
      input.value = nativeInputValue.value;
    };
    const handleInput = event => {
      const { value } = event.target;
      if (isComposing.value) return;
      if (value === nativeInputValue.value) return;
      emit('update:modelValue', value);
      emit('input', value);
      nextTick(setNativeInputValue);
    };
    const handleFocus = event => {
      focused.value = true;
      hovering.value = false;
      emit('focus', event);
    };
    const handleBlur = event => {
      focused.value = false;
      emit('blur', event);
      // if (props.validateEvent) {
      //   elFormItem.formItemMitt?.emit('el.form.blur', [props.modelValue]);
      // }
    };
    const handleCompositionStart = () => {
      isComposing.value = true;
    };
    const handleCompositionUpdate = event => {
      const text = event.target.value;
      const lastCharacter = text[text.length - 1] || '';
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = event => {
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const handleChange = event => {
      emit('change', event.target.value);
    };
    const handleMouseWheel = value => {
      emit('mousewheel', value);
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const handleKeydown = e => {
      emit('keydown', e);
    };
    const onMouseLeave = e => {
      hovering.value = false;
      emit('mouseleave', e);
    };
    const onMouseEnter = e => {
      hovering.value = true;
      emit('mouseenter', e);
    };
    const getSuffixVisible = () => {
      return slots.suffix || props.suffixIcon || props.showPassword;
    };
    // watch
    watch(
      () => props.modelValue,
      val => {
        nextTick(resizeTextarea);
        // 表單驗證的時候需要用到的方法
        if (props.validateEvent) {
          // if (elFormItem && elFormItem.formItemMitt) {
          //   emit('el.form.change', [val]);
          // }
        }
      }
    );
    watch(nativeInputValue, () => {
      setNativeInputValue();
    });
    watch(
      () => props.type,
      () => {
        nextTick(() => {
          setNativeInputValue();
          resizeTextarea();
          // updateIconOffset();
        });
      }
    );
    // left cycle
    onMounted(() => {
      setNativeInputValue();
      // updateIconOffset();
      nextTick(resizeTextarea);
    });
    onUpdated(() => {
      // nextTick(updateIconOffset);
    });
    return {
      props,
      inputSize,
      inputDisabled,
      input,
      textarea,
      textareaStyle,
      inputOrTextarea,
      resizeTextarea,
      passwordVisible,
      handlePasswordVisible,
      handleInput,
      handleChange,
      handleMouseWheel,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleFocus,
      handleBlur,
      getSuffixVisible,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
      focus,
      hovering,
      showPwdVisible
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/input.scss';
</style>
