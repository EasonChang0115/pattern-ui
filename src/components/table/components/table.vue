<template>
  <pg-scrollbar v-loading="loading">
    <div class="pg-table">
      <table>
        <thead>
          <tr class="pg-table-header">
            <th v-if="selection" class="pg-table-selection">
              <pg-checkbox v-model="selectedAll" @change="selectAll"></pg-checkbox>
            </th>
            <slot />
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, index) in data" :key="index" class="pg-table-row">
            <td v-if="selection" class="pg-table-selection">
              <pg-checkbox :modelValue="selectedList.includes(row)" @change="changeSelect(row)"></pg-checkbox>
            </td>
            <td v-for="column in columns" :key="column.uid" :ref="(el) => renderCell(el, column, row)" :class="[`pg-table-column--align-${column.align}`]"></td>
          </tr>
        </tbody>
      </table>
      <div v-if="!data.length" class="empty">
        <span v-show="!loading">无数据</span>
      </div>
    </div>
  </pg-scrollbar>
</template>

<script>
import { provide, ref, watch } from 'vue';
import PgScrollbar from '@/components/scrollbar/index.js';

export default {
  name: 'PgTable',
  components: { PgScrollbar },
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    loading: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, slots }) {
    const selectedAll = ref(false);
    const selectedList = ref([]);
    const columns = ref([]);
    provide('addColumn', (column) => {
      const index = columns.value.findIndex(item => item.uid === column.uid);
      if (index === -1) columns.value.push(column);
      else columns.value.splice(index, 1, { ...columns.value[index], ...column });
    });

    provide('removeColumn', (uid) => {
      const index = columns.value.findIndex(item => item.uid === uid);
      if (index !== -1) columns.value.splice(index, 1);
    });

    function renderCell(container, column, row) {
      if (!container) return;
      column.render(row, container);
    }

    function selectAll() {
      if (selectedAll.value) {
        selectedList.value = props.data;
      } else {
        selectedList.value = [];
      }
      emit('selectChange', selectedList.value);
    }

    function changeSelect(row) {
      const index = selectedList.value.findIndex(selected => selected === row);
      if (index === -1) selectedList.value.push(row);
      else selectedList.value.splice(index, 1);
      emit('selectChange', selectedList.value);
    }

    watch(() => props.data, () => {
      const newVal = selectedList.value.filter(selected => props.data.includes(selected));
      if (props.selection && newVal.length !== selectedList.value.length) {
        selectedAll.value = false;
        selectedList.value = newVal;
        emit('selectChange', newVal);
      }
    }, {
      deep: true
    });

    return {
      selectedAll,
      selectedList,
      columns,
      renderCell,
      selectAll,
      changeSelect
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/table.scss";
</style>
