<template>
  <div
    v-click-outside="handleClose"
    class="pg-select"
    :class="[
      selectSize ? 'pg-select--' + selectSize : '',
      isOpenMenu ? 'is-menu-open': ''
    ]"
    @click.stop="toggleMenu"
    :style="{ width: `${width}px` }"
  >
    <div class="pg-select__trigger">
      <pg-input
        :id="id"
        v-model="selectLabel"
        type="text"
        :size="selectSize"
        :disabled="selectDisabled"
        :placeholder="placeholder"
        :width="width"
        readonly
      >
        <template #suffix>
          <i :class="['pg-select__caret', 'pg-input__icon', 'pg-icon-' + iconClass]"></i>
        </template>
      </pg-input>
    </div>
    <pg-collapse-transition>
      <div class="pg-select__menu" v-show="isOpenMenu">
        <ul class="pg-select__menu--inner">
          <slot></slot>
        </ul>
      </div>
    </pg-collapse-transition>
  </div>
</template>

<script>
import {
  ref,
  defineComponent,
  computed,
  provide
} from 'vue';
import { isValidComponentSize } from '@/utils/validators.js';
import ClickOutside from '@/directives/click-outside';
import PgInput from '@/components/input';
import PgCollapseTransition from '@/components/collapse-transition';
export default defineComponent({
  directives: { ClickOutside },
  name: 'PgSelect',
  components: {
    PgInput,
    PgCollapseTransition
  },
  props: {
    name: String,
    id: String,
    modelValue: [Array, String, Number, Boolean, Object],
    size: {
      type: String,
      validator: isValidComponentSize
    },
    disabled: Boolean,
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    width: {
      type: Number
    }
  },
  setup(props, { emit }) {
    const isOpenMenu = ref(false);
    const options = ref([]);
    // computed
    const selectDisabled = computed(() => props.disabled);
    const selectSize = computed(() => props.size);
    const iconClass = computed(() => isOpenMenu.value ? 'arrow-up is-reverse' : 'arrow-up');
    const selectLabel = computed({
      get() {
        const selected = options.value.find(option => option.value === props.modelValue);
        return selected ? selected.label : '';
      },
      set(value) {
        emit('update:modelValue', value);
      }
    });
    // methods
    const toggleMenu = () => {
      if (selectDisabled.value) return;
      isOpenMenu.value = !isOpenMenu.value;
    };
    const handleClose = () => {
      isOpenMenu.value = false;
    };
    const addMenuOptions = (option) => {
      options.value.push(option);
    };
    const onChangeSelectValue = (value) => {
      if (selectDisabled.value) return;
      emit('update:modelValue', value);
      toggleMenu();
    };
    // provide
    provide('rootMenu', {
      props,
      methods: {
        addMenuOptions,
        onChangeSelectValue
      }
    });
    return {
      // data
      isOpenMenu,
      options,
      // computed
      selectDisabled,
      selectLabel,
      selectSize,
      iconClass,
      // methods
      toggleMenu,
      handleClose
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/select.scss';
</style>
