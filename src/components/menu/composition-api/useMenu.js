import { computed } from 'vue';

export default function useMenu(instance, currentIndex) {
  const indexPath = computed(() => {
    let { parent } = instance;
    const path = [currentIndex];
    while (parent.type.name !== 'PgMenu') {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      // eslint-disable-next-line prefer-destructuring
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let { parent } = instance;
    while (parent && ['PgMenu', 'PgSubMenu'].indexOf(parent.type.name) === -1) {
      // eslint-disable-next-line prefer-destructuring
      parent = parent.parent;
    }
    return parent;
  });
  return { parentMenu, indexPath };
}
