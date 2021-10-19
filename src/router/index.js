import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Intro 介紹',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/layout',
    name: 'Layout RWD 佈局',
    component: () => import('../views/Layout.vue')
    // children: [
    //   {
    //     path: 'breakpoints'
    //   }
    // ]
  },
  {
    path: '/button',
    name: 'Button 按鈕',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/menu',
    name: 'NavMenu 菜單欄位',
    component: () => import('../views/NavMenu.vue')
  },
  {
    path: '/messagebox',
    name: 'Dialog 對話框',
    component: () => import('../views/MessageBox.vue')
  },
  {
    path: '/message',
    name: 'Message 消息提示',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/radio',
    name: 'Radio 單選框',
    component: () => import('../views/Radio.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox 多選框',
    component: () => import('../views/Checkbox.vue')
  },
  {
    path: '/input',
    name: 'Input 輸入框',
    component: () => import('../views/Input.vue')
  },
  {
    path: '/inputNumber',
    name: 'InputNumber 計數器',
    component: () => import('../views/InputNumber.vue')
  },
  {
    path: '/select',
    name: 'Select 選擇器',
    component: () => import('../views/Select.vue')
  },
  {
    path: '/switch',
    name: 'Switch 開關',
    component: () => import('../views/Switch.vue')
  },
  {
    path: '/table',
    name: 'Table 表格',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/loading',
    name: 'Loading 載入',
    component: () => import('../views/Loading.vue')
  },
  {
    path: '/slider',
    name: 'Slider 滑塊',
    component: () => import('../views/Slider.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../views/Icon.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
});

export default router;
