import Loading from './components/Loading.js';
import vLoading from './components/directive.js';
import './scss/index.scss';

Loading.install = function(app) {
  app.directive('loading', vLoading);
  app.config.globalProperties.$loading = Loading;
};

export default Loading;
