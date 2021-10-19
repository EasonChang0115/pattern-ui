import DialogConstructor from './components/dialog.vue';
import { h, render } from 'vue';

let instance = null;
const initInstance = () => {
  const vnode = h(DialogConstructor);
  const container = document.createElement('div');
  render(vnode, container);
  return vnode.component;
};

instance = initInstance();
function Dialog(config) {
  dialogReset();
  const {
    title = '', mode = 'default', formType = [], width = null, top = null, hideClose, alertMode = 'default', alertType = 'success', text = '', html = null, confirmText = '确定', cancelText = '取消', showComfirmBtn = true, showCancelBtn = false, confirmfunction, cancelfunction, maskShow = true, alertIcon = false, errorText = ''
  } = config;
  instance.data.visible = true;
  instance.data.title = title;
  instance.data.width = width;
  instance.data.top = top;
  instance.data.confirmText = confirmText;
  instance.data.cancelText = cancelText;
  instance.data.showComfirmBtn = showComfirmBtn;
  instance.data.showCancelBtn = showCancelBtn;
  instance.data.alertType = alertType;
  instance.data.alertMode = alertMode;
  instance.data.html = html;
  instance.data.text = text;
  instance.data.maskShow = maskShow;
  instance.data.alertIcon = alertIcon;
  if (hideClose) instance.data.isClose = false; // 隐藏右上角叉叉
  // dialog 为 alert 模式一定会显示或隐藏的部份
  if (mode === 'alert') {
    instance.data.mode = 'alert';
    instance.data.maskShow = false;
    instance.data.alertIcon = true;
    instance.ctx.confirm = () => {
      instance.data.visible = false;
      if (typeof confirmfunction === 'function') confirmfunction();
    };
    instance.ctx.cancel = () => {
      instance.data.visible = false;
      if (typeof cancelfunction === 'function') cancelfunction();
    };
  } else {
    instance.data.mode = 'form';
    instance.data.formType = formType;
    instance.data.form = {}; // 内容归零
    for (const item of formType) {
      let defaultValue = '';
      if (item.ftype === 'inputNumber') {
        defaultValue = item.defaultValue ? item.defaultValue : 0;
      } else if (item.ftype === 'checkbox') {
        defaultValue = item.defaultValue ? item.defaultValue : [];
      } else {
        defaultValue = item.defaultValue ? item.defaultValue : '';
      }
      instance.data.form[item.model] = defaultValue;
    }
    if (showComfirmBtn) {
      // 判断 form 中是否有自身属性 有为 true 反之为 false
      instance.ctx.confirm = function () {
        // 判断 form 里面有没有必选的项目没有选到
        let isEmpty = false;
        instance.data.formType.forEach((item) => {
          if (item.required && (!instance.data.form[item.model])) isEmpty = true;
        });
        // 如果选择了 radio 或者不需要点确定回传数据的话，点击确定 dialog 消失
        if (isEmpty) {
          // 若有必选 则需显示尚未选完
          // 如果选择了 radio 并且传入了 isEmpty，赋值
          instance.data.errorText = errorText;
          instance.data.visible = true;
        } else {
          if (typeof confirmfunction === 'function') {
            const errorInfo = confirmfunction({
              response: instance.data.form
            });
            if (errorInfo) {
              instance.data.errorText = errorInfo;
              instance.data.visible = true;
            } else {
              instance.data.visible = false;
              setTimeout(() => {
                instance.data.formType = [];
                instance.data.form = {};
                instance.data.errorText = '';
              }, 400);
            }
          } else {
            instance.data.visible = false;
            instance.data.errorText = '';
            instance.data.formType = [];
            instance.data.form = {};
          }
        }
      };
    }
    if (showCancelBtn) {
      instance.ctx.cancel = function () {
        instance.data.visible = false;
        instance.data.errorText = '';
        instance.data.formType = [];
        instance.data.form = {};
      };
    }
  }
  instance.data.visible = true;
}

Dialog.success = ({
  text,
  html,
  callback
}) => {
  setAlertAttr('primary', text, html, callback);
};

Dialog.error = ({
  text,
  html,
  callback
}) => {
  setAlertAttr('danger', text, html, callback);
};

Dialog.prompt = ({
  text,
  html,
  callback
}) => {
  setAlertAttr('success', text, html, callback);
};

Dialog.confirm = ({
  text,
  type = 'primary',
  callback
}) => {
  dialogReset();
  instance.data.visible = true;
  instance.data.mode = 'alert';
  instance.data.alertType = type;
  instance.data.text = text;
  instance.data.maskShow = false;
  instance.data.html = null;
  instance.data.alertMode = 'confirm';
  instance.ctx.confirm = () => {
    instance.data.visible = false;
    if (typeof callback === 'function') callback();
  };
  instance.ctx.cancel = () => {
    instance.data.visible = false;
  };
};

Dialog.close = () => {
  instance.data.visible = false;
};

// 快捷调用 alert，设置属性
function setAlertAttr(key, text, html, callback) {
  dialogReset();
  instance.data.errorText = '';
  instance.data.visible = true;
  instance.data.mode = 'alert';
  instance.data.alertType = key;
  instance.data.text = text;
  instance.data.alertIcon = true;
  instance.data.maskShow = false;
  instance.data.html = html;
  instance.ctx.confirm = () => {
    if (typeof callback === 'function') callback();
    instance.data.visible = false;
  };
};
// dialog恢复默认属性
function dialogReset(obj) {
  instance.data.form = {};
  instance.data.formType = [];
  instance.data.title = '';
  instance.data.text = '';
  instance.data.errorText = '';
  instance.data.width = '';
  instance.data.top = '';
  instance.data.visible = false;
  instance.data.showComfirmBtn = true;
  instance.data.showCancelBtn = false;
  instance.data.isClose = true;
  instance.data.mode = 'form';
  instance.data.alertType = '';
  instance.data.alertIcon = false;
  instance.data.maskShow = true;
  instance.data.html = null;
  instance.data.alertMode = 'default';
  instance.data.confirmText = '确定';
  instance.data.cancelText = '取消';
  instance.ctx.confirm = () => {
    instance.data.visible = false;
  };
  instance.ctx.cancel = () => {
    instance.data.visible = false;
  };
}

Dialog.install = function (app) {
  app.config.globalProperties.$dialog = Dialog;
};

export default Dialog;
