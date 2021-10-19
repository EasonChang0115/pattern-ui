import { createVNode, h, reactive, ref, render, toRefs, Transition, vShow, withCtx, withDirectives } from 'vue';
import { removeClass } from '@/utils/index';
import loading2 from './loadingGif';

export function createLoadingComponent({ options, globalLoadingOption }) {
  let vm = null;
  let afterLeaveTimer = null;

  const afterLeaveFlag = ref(false);
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: false
  });

  function setText(text) {
    data.text = text;
  }

  function destroySelf() {
    const target = data.parent;
    if (!target.vLoadingAddClassList) {
      let loadingNumber = target.getAttribute('loading-number');
      loadingNumber = Number.parseInt(loadingNumber) - 1;
      if (!loadingNumber) {
        removeClass(target, 'pg-loading-parent--relative');
        target.removeAttribute('loading-number');
      } else {
        target.setAttribute('loading-number', loadingNumber.toString());
      }
      removeClass(target, 'pg-loading-parent--hidden');
    }
    if (vm.el && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el);
    }
  }

  function close() {
    const target = data.parent;
    target.vLoadingAddClassList = null;
    if (data.fullscreen) {
      globalLoadingOption.fullscreenLoading = undefined;
    }
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);

    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false;
        destroySelf();
      }
    }, 400);
    data.visible = false;
  }

  function handleAfterLeave() {
    if (!afterLeaveFlag.value) return;
    afterLeaveFlag.value = false;
    destroySelf();
  }

  const componentSetupConfig = {
    ...toRefs(data),
    setText,
    close,
    handleAfterLeave
  };

  const pgLoadingComponent = {
    name: 'PgLoading',
    setup() {
      return componentSetupConfig;
    },
    render() {
      // const spinner = h('svg', {
      //   class: 'circular',
      //   viewBox: '25 25 50 50'
      // }, [
      //   h('circle', { class: 'path', cx: '50', cy: '50', r: '20', fill: 'none' })
      // ]);
      const spinner = h('div', {
        class: 'pg-loading-gif',
        style: {
          backgroundImage: `url(${loading2()})`
        }
      });

      const noSpinner = h('i', { class: this.spinner });

      const spinnerText = h('p', { class: 'pg-loading-text' }, [this.text]);

      return h(
        Transition,
        {
          name: 'fade',
          onAfterLeave: this.handleAfterLeave
        },
        {
          default: withCtx(() => [
            withDirectives(
              createVNode(
                'div',
                {
                  style: {
                    backgroundColor: this.background || ''
                  },
                  class: ['pg-loading-mask', this.customClass, this.fullscreen ? 'is-fullscreen' : '']
                },
                [
                  h(
                    'div',
                    {
                      class: 'pg-loading-spinner'
                    },
                    [!this.spinner ? spinner : noSpinner, this.text ? spinnerText : null]
                  )
                ]
              ),
              [[vShow, this.visible]]
            )
          ])
        }
      );
    }
  };

  vm = createVNode(pgLoadingComponent);

  render(vm, document.createElement('div'));

  return {
    ...componentSetupConfig,
    vm,
    get $el() {
      return vm.el;
    }
  };
}
