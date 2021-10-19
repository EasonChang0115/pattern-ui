<template>
  <th :class="['pg-table-column', `pg-table-column--align-${align}`]">
    {{ propsLabel }}
  </th>
</template>

<script>
import { getCurrentInstance, render, h, inject, onUnmounted, computed } from 'vue';
export default {
  name: 'PgTableColumn',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  setup(props, { slots }) {
    const { uid } = getCurrentInstance();
    const addColumn = inject('addColumn');
    const removeColumn = inject('removeColumn');
    const propsLabel = computed(() => props.label);
    addColumn({
      uid,
      align: computed(() => props.align),
      render(row, container) {
        if (!slots.default) {
          render(
            h(
              'div',
              {
                className: 'cell'
              },
              row[props.prop]
            ),
            container
          );
        } else {
          render(
            h(
              'div',
              {
                className: 'cell'
              },
              slots.default(row)
            ),
            container
          );
        }
      }
    });
    onUnmounted(() => {
      removeColumn(uid);
    });
    return {
      propsLabel
    };
  }
};
</script>
