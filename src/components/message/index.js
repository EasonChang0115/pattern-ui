import { createVNode, isVNode, render } from 'vue';
import MessageConstructor from './components/message.vue';

const instances = [];
let count = 1;
let zIndex = 2021;
function close(id) {
  const index = instances.findIndex(instance => instance.component.props.id === id);
  if (index === -1) return false;
  const { offsetHeight } = instances[index].el;
  instances.splice(index, 1);
  for (let i = index; i < instances.length; i++) {
    const vm = instances[i];
    const pos = parseInt(vm.el.style.top, 10) - offsetHeight - 16;
    vm.component.props.offset = pos;
  }
}

function closeAll() {
  instances.forEach(instance => close(instance.component.props.id));
}
function Message(options) {
  const id = `message_${count++}`;
  const container = document.createElement('div');

  options = {
    id,
    zIndex: zIndex++,
    ...options,
    offset: options.offset || 20 + instances.reduce((total, current) => (total += 16 + current.el.offsetHeight), 0),
    onDestroy: () => {
      render(null, container);
    },
    onClose: () => {
      close(id);
    }
  };

  const vm = createVNode(MessageConstructor, options, isVNode(options.message) ? { default: () => options.message } : null);
  render(vm, container);
  document.body.appendChild(container.firstChild);

  instances.push(vm);

  return {
    close: () => (vm.component.proxy.visible = false)
  };
}

(['success', 'warning', 'info', 'error']).forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string' || typeof isVNode(options)) {
      options = {
        message: options,
        type
      };
    } else {
      options.type = type;
    }
    return Message(options);
  };
});
Message.closeAll = closeAll;
Message.install = function(instance) {
  instance.config.globalProperties.$message = Message;
};
export default Message;
