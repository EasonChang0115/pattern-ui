<template>
  <div class="button-demo-page">
    <h2 class="page-title">Icons</h2>
    <p class="description">目前版騰信息有的 icon 種類，點擊可以複製到剪貼簿</p>
    <div class="section-block">
      <ul class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        <li v-for="icon in icons" :key="icon" class="col mb-4" @click="copy(`pg-icon-${icon}`)">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded fz-4">
            <i :class="`pg-icon-${icon}`"></i>
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">{{ `pg-icon-${icon}` }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const icons = [
  'undo',
  'redo',
  'select',
  'trash',
  'preview-photo',
  'save',
  'search-minus',
  'search-plus',
  'arrow-down',
  'arrow-up',
  'arrow-right',
  'arrow-left',
  'side-menu-closet',
  'side-menu-craft',
  'side-menu-reference',
  'side-menu-size',
  'side-menu-fabric',
  'view',
  'calendar',
  'search',
  'plus',
  'minus',
  'close',
  'export',
  'reset',
  'copy',
  'copy2',
  'delete',
  'anchor',
  'move',
  'taperedpleat',
  'stitching',
  'pipping',
  'nodes',
  'mirror',
  'design',
  'grid',
  'knifepleat',
  'gathering',
  'delete-node',
  'cutting',
  'adjust',
  'dart',
  'add-node',
  'boxpleat',
  'my-design',
  'help',
  'spin-left',
  'spin-right',
  'menu',
  // objects
  'bottom_base',
  'bottom_elastic',
  'bottom_high',
  // pockets
  'straight_pocket',
  'splice_pocket',
  'single_welt_pocket',
  'patch_pocket',
  'gusset_pocket',
  'flap',
  'double_welt_pocket',
  'curved_pocket',
  'box_pocket',
  // fly
  'visible_zip_fly',
  'visible_zipper',
  'visible_button_fly',
  'mock_fly',
  'invisible_zip_fly',
  'invisible_button_fly',
  // belt
  'basic_belt',
  'buckle_belt',
  'double_belt',
  'pin_belt',
  // beltloop
  'i_shaped',
  'shield_shaped',
  'u_shaped',
  'v_shaped',
  'x_shaped',
  // slit
  'slit',
  // degigns-otehr
  'cuff',
  'waistband',
  'turn_up_leg_opening',
  // button
  'snap',
  'button',
  // zipper
  'basic_zipper',
  // drawstring
  'single_drawstring',
  'double_drawstring',
  // degigns-otehr
  'rib',
  'eyelet',
  'rope',
  'elasticband',
  'invisible_zipper',
  'visible_zipper'
];

export default {
  setup() {
    const copy = text => {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    };
    return {
      icons,
      copy
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    cursor: pointer;
    &:hover {
      color: $primary;
    }
  }
  li i {
    font-size: 16px;
  }
}
</style>
