<template>
  <div class="pg-desgin-selector">
    <label :id="outOfRange ? 'warning' : ''" :class="props.disabled ? 'no-drop' : ''" class="default-direction-title">
      <slot v-if="!outOfRange" name="label">{{`${props.label} ${props.unit ? `(${props.unit})` : ''}`}}</slot>
      <span v-else>{{ `${props.outOfRangeText}: ${props.min} ~ ${props.max}` }}</span>
    </label>
    <div
      v-click-outside="handleClose"
      class="pg-select pg-select--mini"
      :class="[
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
          size="mini"
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
  </div>
</template>

<script>
import {
  ref,
  defineComponent,
  computed,
  provide
} from 'vue';
import ClickOutside from '@/directives/click-outside';
import PgInput from '@/components/input';
import PgCollapseTransition from '@/components/collapse-transition';
export default defineComponent({
  directives: { ClickOutside },
  name: 'PgDesignSelector',
  components: {
    PgInput,
    PgCollapseTransition
  },
  props: {
    name: String,
    id: String,
    outOfRangeText: {
      type: String,
      default: 'Out of range'
    },
    label: {
      type: String,
      default: 'Default Label'
    },
    modelValue: [Array, String, Number, Boolean, Object],
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
    const outOfRange = ref(false);
    const isOpenMenu = ref(false);
    const options = ref([]);
    // computed
    const selectDisabled = computed(() => props.disabled);
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
      props,
      // data
      outOfRange,
      isOpenMenu,
      options,
      // computed
      selectDisabled,
      selectLabel,
      iconClass,
      // methods
      toggleMenu,
      handleClose
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/design-select.scss';
@import '../scss/select.scss';
</style>
