<template>
  <h3 class="section-title">設計系統</h3>
  <div class="section-block">
    <pg-property-slot typeFont="屬性">
    <div class="section-insect" style="z-index: 1">
      <pg-design-selector
        :width="100"
        label="摺向"
        v-model="value"
        placeholder="請選擇"
      >
        <pg-option
          v-for="item in options"
          :key="item.value"
          :label="item.font"
          :value="item.value"
        />
      </pg-design-selector>
    </div>
    </pg-property-slot>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const value = ref('toTop');
    const options = [
      {
        value: 'toTop',
        font: '上面'
      },
      {
        value: 'toBottom',
        font: '下面'
      }
    ];
    watch(value, (newVal) => {
      console.log(newVal);
    });
    return {
      value,
      options
    };
  }
};
</script>
