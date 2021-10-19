<template>
  <h3 class="section-title">設計系統</h3>
  <div class="section-block">
    <pg-property-slot typeFont="屬性">
      <div class="section-insect" style="z-index: 1">
        <pg-design-switch :width="100" :height="30" label="参考方向" v-model="value" onText="on" offText="off"> </pg-design-switch>
      </div>
      <div class="section-insect" style="z-index: 1">
        <pg-design-switch :width="100" :height="30" label="参考方向" v-model="value" onText="on" offText="off" disableText> </pg-design-switch>
      </div>
      <div class="section-insect" style="z-index: 1">
        <pg-design-switch :width="100" :height="30" label="参考方向" v-model="value" onText="on" offText="off" isButton> </pg-design-switch>
      </div>
    </pg-property-slot>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const value = ref(true);
    watch(value, newVal => {
      console.log(newVal);
    });
    return {
      value
    };
  }
};
</script>
