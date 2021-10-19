
import { on } from '@/utils/index';

const nodeList = new Map();
let startClick = null;

on(document, 'mousedown', (e) => (startClick = e));
on(document, 'mouseup', (e) => {
  for (const { documentHandler } of nodeList.values()) {
    documentHandler(e, startClick);
  }
});

function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;

    const isTargetExcluded = (excludes.length && excludes.some(item => item && item.contains(mouseUpTarget))) ||
    (excludes.length && excludes.includes(mouseDownTarget));
    if (
      isBound ||
      isTargetExists ||
      isContainedByEl ||
      isSelf ||
      isTargetExcluded
    ) {
      return;
    }
    binding.value();
  };
};

const ClickOutside = {
  beforeMount(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};

export default ClickOutside;
