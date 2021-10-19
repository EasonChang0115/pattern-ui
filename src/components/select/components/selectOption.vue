<template>
  <li
    class="pg-select__item"
    :class="{
      'selected': itemSelected,
      'is-disabled': isDisabled
    }"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
import {
  defineComponent,
  inject,
  computed,
  onMounted,
  getCurrentInstance
} from 'vue';
export default defineComponent({
  name: 'PgOption',
  props: {
    value: {
      required: true,
      type: [String, Number, Object]
    },
    label: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { props: rootProps, methods: rootMethods } = inject('rootMenu');
    const isObject = computed(() => {
      return Object.prototype.toString.call(props.value).toLowerCase() === '[object object]';
    });
    const itemSelected = computed(() => rootProps.modelValue === props.value);
    const currentLabel = computed(() => {
      return props.label || (isObject.value ? '' : props.value);
    });
    const isDisabled = computed(() => props.disabled);
    const currentValue = computed(() => {
      return props.value || props.label || '';
    });
    const hoverItem = () => {};
    const selectOptionClick = () => {
      if (isDisabled.value) return;
      rootMethods.onChangeSelectValue(props.value);
    };

    // live circle
    onMounted(() => {
      rootMethods.addMenuOptions({
        id: instance.id,
        label: props.label,
        value: props.value
      });
    });
    return {
      isDisabled,
      hoverItem,
      currentLabel,
      currentValue,
      selectOptionClick,
      itemSelected
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/select-option.scss';
</style>
