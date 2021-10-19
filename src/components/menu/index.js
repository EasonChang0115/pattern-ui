import Menu from './components/menu.vue';
import ＭenuItem from './components/menuItem.vue';
import MenuItemGroup from './components/menuItemGroup.vue';
import SubMenu from './components/subMenu.vue';
import MenuCollapseTransition from './components/menu-collapse-transition.vue';
import leftSideNavMenu from './components/leftSideNavMenu.vue';
const components = [
  MenuCollapseTransition,
  MenuItemGroup,
  ＭenuItem,
  SubMenu,
  Menu,
  leftSideNavMenu
];
components.forEach(component => {
  component.install = (app) => {
    app.component(component.name, component);
  };
});
export {
  MenuCollapseTransition,
  MenuItemGroup,
  leftSideNavMenu,
  ＭenuItem,
  SubMenu,
  Menu
};
