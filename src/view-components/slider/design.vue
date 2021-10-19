<template>
  <h3 class="section-title">設計系統</h3>
  <div class="section-block">
    <pg-property-slot typeFont="屬性">
      <div class="section-insect">
          <pg-design-slider
            label="安哥拉山羊毛"
            :value="value1"
            :min="0"
            :max="10"
            @change="handleChangeFabricTypeData($event)"
          ></pg-design-slider>
      </div>
    </pg-property-slot>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const value1 = ref(0);
    const handleChangeFabricTypeData = (value) => {
      value1.value = value;
      console.log(value);
    };
    watch(value1, (newVal) => {
      console.log(newVal);
    });
    return {
      value1,
      handleChangeFabricTypeData
    };
  }
};
</script>
