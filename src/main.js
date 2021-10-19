import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import '@/scss/index.scss';
import '@/prism/index.css';
import '@/prism/index.js';

import patternDesignUI from '@/components/index';
import MethodsViewer from '@/view-components/MethodsViewer.vue';
import AttributesViewer from '@/view-components/AttributesViewer.vue';
import CodeHighlight from '@/view-components/CodeHighlight.vue';

const instance = createApp(App);
instance.use(router);
instance.use(patternDesignUI);
instance.component('methods-viewer', MethodsViewer);
instance.component('attributes-viewer', AttributesViewer);
instance.component('code-highlight', CodeHighlight);
instance.mount('#app');
