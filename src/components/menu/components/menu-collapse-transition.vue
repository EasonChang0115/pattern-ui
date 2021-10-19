<template>
  <transition mode="out-in" v-on="on">
    <slot></slot>
  </transition>
</template>
<script>
import { defineComponent } from 'vue';
import { addClass, removeClass, hasClass } from '@/utils/index.js';
export default defineComponent({
  name: 'PgMenuCollapseTransition',
  setup() {
    return {
      on: {
        beforeEnter(el) {
          el.style.opacity = 0.2;
        },
        enter(el) {
          addClass(el, 'pg-opacity-transition');
          el.style.opacity = 1;
        },
        afterEnter(el) {
          removeClass(el, 'pg-opacity-transition');
          el.style.opacity = '';
        },
        beforeLeave(el) {
          if (!el.dataset) el.dataset = {};
          if (hasClass(el, 'pg-menu--collapse')) {
            removeClass(el, 'pg-menu--collapse');
            el.dataset.oldOverflow = el.style.overflow;
            el.dataset.scrollWidth = el.clientWidth;
            addClass(el, 'pg-menu--collapse');
          } else {
            addClass(el, 'pg-menu--collapse');
            el.dataset.oldOverflow = el.style.overflow;
            el.dataset.scrollWidth = el.clientWidth;
            removeClass(el, 'pg-menu--collapse');
          }
          el.style.width = `${el.scrollWidth}px`;
          el.style.overflow = 'hidden';
        },
        leave(el) {
          addClass(el, 'horizontal-collapse-transition');
          el.style.width = `${el.dataset.scrollWidth}px`;
        }
      }
    };
  }
});
</script>
