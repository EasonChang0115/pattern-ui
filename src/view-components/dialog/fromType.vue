<template>
  <h3 class="section-title">內嵌表單</h3>
  <div class="section-block">
    <h4 class="mb-3">可用於表單嵌入，返回 Json 的值</h4>
    <div class="section-insect">
      <pg-button type="primary" size="small" @click="btnclickInput">Input 展示</pg-button>
      <pg-button type="success" size="small" @click="btnclickRadio">radio 展示</pg-button>
      <pg-button type="info" size="small" @click="btnclickCheckbox">checkbox 展示</pg-button>
      <pg-button type="warning" size="small" @click="btnClickInputNumber">inputNumber 展示</pg-button>
      <pg-button type="primary" size="small" @click="btnClickSelect">select 展示</pg-button>
      <pg-button type="warning" size="small" @click="btnClickMutiple">Mutiple</pg-button>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
export default {
  setup: props => {
    const { proxy } = getCurrentInstance();
    const btnclickInput = () => {
      proxy.$dialog({
        title: '请输入数值并回传',
        width: '24rem',
        formType: [
          {
            label: '请选择口袋所在廓形位置：',
            ftype: 'input',
            model: 'inputValue'
          }
        ],
        confirmfunction({ response }) {
          console.log(response);
          if (response.inputValue) alert(response.inputValue);
        }
      });
    };
    const btnclickRadio = () => {
      proxy.$dialog({
        title: '请选择口袋所在廓形位置',
        width: '24rem',
        formType: [
          {
            ftype: 'radio',
            model: 'lalala',
            required: true,
            options: [
              {
                label: '前中',
                value: 'front',
                childrens: [
                  {
                    ftype: 'radio',
                    model: 'test',
                    title: '纽扣位置：',
                    options: [
                      {
                        label: '前',
                        value: 'front'
                      },
                      {
                        label: '后',
                        value: 'back'
                      }
                    ]
                  },
                  {
                    ftype: 'radio',
                    model: 'test2',
                    title: '纽扣位置：',
                    options: [
                      {
                        label: '前',
                        value: 'front'
                      },
                      {
                        label: '中',
                        value: 'center'
                      },
                      {
                        label: '后',
                        value: 'back'
                      }
                    ]
                  }
                ]
              },
              {
                label: '后中',
                value: 'back'
              },
              {
                label: '胁边',
                value: 'side'
              }
            ]
          }
        ],
        errorText: '不能为空',
        confirmfunction({ response }) {
          console.log(response);
        }
      });
    };
    const btnclickCheckbox = () => {
      proxy.$dialog({
        title: 'checkbox',
        width: '24rem',
        formType: [
          {
            ftype: 'checkbox',
            model: 'lalala',
            required: true,
            options: [
              {
                label: '前中',
                value: 'front'
              },
              {
                label: '后中',
                value: 'back'
              },
              {
                label: '胁边',
                value: 'side'
              }
            ]
          }
        ],
        confirmfunction({ response }) {
          console.log(response);
        }
      });
    };
    const btnClickInputNumber = () => {
      proxy.$dialog({
        title: '输入数字并回传',
        width: '24rem',
        formType: [
          {
            ftype: 'inputNumber',
            model: 'buttonNumber',
            defValue: 2
          }
        ],
        confirmfunction({ response }) {
          console.log(response);
        }
      });
    };
    const btnClickSelect = () => {
      proxy.$dialog({
        title: 'select 展示',
        width: '24rem',
        formType: [
          {
            ftype: 'select',
            model: 'lalala',
            options: [
              {
                label: '数字一',
                value: 1
              },
              {
                label: '数字二',
                value: 2
              }
            ]
          }
        ],
        confirmfunction({ response }) {
          console.log(response);
        }
      });
    };
    const btnClickMutiple = () => {
      proxy.$dialog({
        title: 'radio',
        width: '24rem',
        formType: [
          {
            label: '请选择口袋所在廓形位置：',
            ftype: 'input',
            model: 'inputValue'
          },
          {
            ftype: 'radio',
            label: '请选择口袋所在廓形位置：',
            model: 'inputRadio',
            required: true,
            options: [
              {
                label: '前中',
                value: 'front'
              },
              {
                label: '后中',
                value: 'back'
              },
              {
                label: '胁边',
                value: 'side'
              }
            ]
          },
          {
            ftype: 'checkbox',
            label: '请选择口袋所在廓形位置：',
            model: 'inputCheckbox',
            required: true,
            options: [
              {
                label: '前中',
                value: 'front'
              },
              {
                label: '后中',
                value: 'back'
              },
              {
                label: '胁边',
                value: 'side'
              }
            ]
          },
          {
            ftype: 'inputNumber',
            label: '请选择口袋所在廓形位置：',
            model: 'inputNumber'
          },
          {
            ftype: 'select',
            label: '晚餐吃啥',
            model: 'inputSelect',
            options: [
              {
                label: '白饭',
                value: 1
              },
              {
                label: '拉面',
                value: 2
              }
            ]
          }
        ],
        confirmfunction({ response }) {
          console.log(response);
        }
      });
    };
    return {
      btnclickInput,
      btnclickRadio,
      btnclickCheckbox,
      btnClickInputNumber,
      btnClickSelect,
      btnClickMutiple
    };
  }
};
</script>

<style lang="scss" scoped>
.section-insect {
  :deep(button) {
    margin-right: 8px;
  }
}
</style>
