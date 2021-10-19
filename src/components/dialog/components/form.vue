<template>
  <div class="pg-dialog__form">
    <div class="pg-dialog__form__content">
      <div class="text" v-if="text">{{ text }}</div>
      <form-wrapper v-if="mode === 'form'">
        <div v-for="item in formType" :key="item.id">
          <item-wrapper class="form-item" v-if="item.ftype === 'radio'" :label="item.label">
            <pg-radio-group v-model="formValue[item.model]" :disabled="item.disabled">
              <pg-radio
                v-for="element in item.options"
                :key="element.label"
                :label="element.label"
                :value="element.value"
                :disabled="element.disabled"
                :name="item.model"
              ></pg-radio>
            </pg-radio-group>
          </item-wrapper>
          <item-wrapper class="form-item" v-if="item.ftype === 'checkbox'" :label="item.label">
            <pg-checkbox-group v-model="formValue[item.model]" :disabled="item.disabled">
              <pg-checkbox v-for="element in item.options" :key="element.label" :value="element.label" :disabled="element.disabled">{{
                element.label
              }}</pg-checkbox>
            </pg-checkbox-group>
          </item-wrapper>
          <item-wrapper class="form-item" v-if="item.ftype === 'inputNumber'" :label="item.label">
            <pg-input-number v-model="formValue[item.model]" :min="item.min" :max="item.max" :disabled="item.disabled" :step="item.step" size="mini" />
          </item-wrapper>
          <item-wrapper class="form-item" v-if="item.ftype === 'input'" :label="item.label">
            <pg-input
              v-model="formValue[item.model]"
              :placeholder="item.placeholder ? item.placeholder : '请输入文字'"
              :type="item.type"
              :disabled="item.disabled"
              :showPassword="item.showPassword"
            ></pg-input>
          </item-wrapper>
          <item-wrapper class="form-item" v-if="item.ftype === 'select'" :label="item.label">
            <pg-select v-model="formValue[item.model]" :placeholder="item.placeholder ? item.placeholder : '请选择选项'" :disabled="item.disabled">
              <pg-select-option v-for="element in item.options" :key="element.label" :label="element.label" :value="element.value" :disabled="element.disabled">
              </pg-select-option>
            </pg-select>
          </item-wrapper>
          <item-wrapper class="form-item" v-if="item.ftype === 'text'">
            <p>{{ item.text }}</p>
          </item-wrapper>
          <!-- <item-wrapper v-if="item.ftype === 'toggle'">
            <i-radio-subsidiary v-model="form[item.model]" :testData="item"></i-radio-subsidiary>
          </item-wrapper> -->
        </div>
      </form-wrapper>
    </div>
    <transition name="fade">
      <span v-if="errorText.length !== 0" class="pg-dialog__errorMsg">{{ errorText }}</span>
    </transition>
    <div class="pg-dialog__form__footer">
      <pg-button v-if="showComfirmBtn" type="primary" size="mini" :disabled="btnDisabled" @click="handleConfirm">
        {{ confirmText }}
      </pg-button>
      <pg-button v-if="showCancelBtn" @click="handleCancel" :disabled="btnDisabled" size="mini">
        {{ cancelText }}
      </pg-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PgButton from '@/components/button';
import PgInput from '@/components/input';
import PgInputNumber from '@/components/inputNumber';
import { Radio as PgRadio, RadioGroup as PgRadioGroup } from '@/components/radio';
import { Checkbox as PgCheckbox, CheckboxGroup as PgCheckboxGroup } from '@/components/checkbox';
import { Select as PgSelect, SelectOption as PgSelectOption } from '@/components/select';
import formWrapper from './formWrapper';
import ItemWrapper from './ItemWrapper';
export default {
  name: 'PgDialogForm',
  components: {
    PgSelect,
    PgSelectOption,
    PgCheckbox,
    PgCheckboxGroup,
    PgRadio,
    PgRadioGroup,
    PgButton,
    PgInput,
    PgInputNumber,
    formWrapper,
    ItemWrapper
  },
  props: {
    mode: {
      type: String
    },
    text: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: null
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
    },
    formType: {},
    form: {},
    errorText: {
      type: String
    }
  },
  setup(props, { emit }) {
    const formValue = ref(props.form);
    const btnDisabled = ref(false);
    const handleConfirm = () => {
      btnDisabled.value = true;
      setTimeout(() => {
        emit('confirm');
        btnDisabled.value = false;
      }, 0);
    };
    const handleCancel = () => {
      btnDisabled.value = true;
      setTimeout(() => {
        emit('cancel');
        btnDisabled.value = false;
      }, 0);
    };
    return {
      btnDisabled,
      formValue,
      handleCancel,
      handleConfirm
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/form.scss';
</style>
