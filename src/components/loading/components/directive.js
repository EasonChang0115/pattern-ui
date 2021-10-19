/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */
import Loading from './Loading';

const createInstance = (el, binding) => {
  const textExr = el.getAttribute('element-loading-text');
  const spinnerExr = el.getAttribute('element-loading-spinner');
  const backgroundExr = el.getAttribute('element-loading-background');
  const customClassExr = el.getAttribute('element-loading-custom-class');
  const vm = binding.instance;
  el.instance = Loading({
    text: vm && vm[textExr] || textExr,
    spinner: vm && vm[spinnerExr] || spinnerExr,
    background: vm && vm[backgroundExr] || backgroundExr,
    customClass: vm && vm[customClassExr] || customClassExr,
    fullscreen: !!binding.modifiers.fullscreen,
    target: binding.modifiers.fullscreen ? null : el,
    body: !!binding.modifiers.body,
    visible: true,
    lock: !!binding.modifiers.lock
  });
};

const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const { instance } = el;
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        createInstance(el, binding);
      } else {
        instance.close();
      }
    }
  },
  unmounted(el) {
    if (el && el.instance && el.instance.close) {
      el.instance.close();
    }
  }
};

export default vLoading;
