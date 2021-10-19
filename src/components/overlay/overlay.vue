<script>
import { createVNode, defineComponent, renderSlot, h } from 'vue';
export default defineComponent({
  name: 'PgOverlay',
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: [String, Array, Object]
    },
    zIndex: {
      type: Number
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    let mousedownTarget = false;
    let mouseupTarget = false;
    const onMaskClick = (e) => {
      if (mousedownTarget && mouseupTarget) {
        emit('click', e);
      }
      mousedownTarget = mouseupTarget = false;
    };
    return () => {
      return props.mask
        ? createVNode(
          'div',
          {
            class: ['el-overlay', props.overlayClass],
            style: {
              zIndex: props.zIndex
            },
            onClick: onMaskClick,
            onMousedown: (e) => {
              // marking current mousedown target.
              if (props.mask) {
                mousedownTarget = e.target === e.currentTarget;
              }
            },
            onMouseup: (e) => {
              if (props.mask) {
                mouseupTarget = e.target === e.currentTarget;
              }
            }
          },
          [renderSlot(slots, 'default')], 4 | 2 | 8,
          ['onClick', 'onMouseup', 'onMousedown']
        )
        : h(
          'div',
          {
            style: {
              zIndex: props.zIndex,
              position: 'fixed',
              top: '0px',
              right: '0px',
              bottom: '0px',
              left: '0px'
            }
          },
          [renderSlot(slots, 'default')]
        );
    };
  }
});
</script>
