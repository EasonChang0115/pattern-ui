<template>
  <h3 class="section-title">設計系統</h3>
  <div class="section-block">
    <div class="section-insect">
      <pg-property-slot typeFont="屬性">
        <pg-design-input-number :step="6" :precision="1" v-model="input4" @change="handleChange" :tip="tip">
          袋口寬 step = 6 {{ input4 }}
        </pg-design-input-number>
        <pg-design-input-number :max="20" :min="1" v-model="input1" @change="handleChange"> 旋轉角度 {{ input1 }} </pg-design-input-number>
      </pg-property-slot>
      <pg-property-slot typeFont="變形">
        <pg-design-input-number v-model="input2" width="100" :precision="1" :focusText="'focusText'" @change="handleChange" :unit="'釐米'">
          精度調整 precision = 2 {{ input2 }}
        </pg-design-input-number>
        <pg-design-input-number disabled v-model="input3" @change="handleChange"> disabeld {{ input3 }} </pg-design-input-number>
        <pg-design-input-number auto="自動" width="100"></pg-design-input-number>
      </pg-property-slot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup: props => {
    const input1 = ref(1);
    const input2 = ref(10);
    const input3 = ref(20);
    const input4 = ref(40);
    const handleChange = value => {
      console.log(value);
    };
    const tip = {
      text: '124',
      image: require('@/assets/beltMinWaistTip.png')
    };
    return {
      tip,
      input1,
      input2,
      input3,
      input4,
      handleChange
    };
  }
};
</script>
