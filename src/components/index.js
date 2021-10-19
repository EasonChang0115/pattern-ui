import Input from './input';
import InputNumber from './inputNumber';
import DesignInputNumber from './designInputNumber';
import Button from './button';
import ButtonGroup from './button-group';
import { Switch, DesignSwitch } from './switch';
import { Slider, DesignSlider } from './slider';
import { MenuCollapseTransition, leftSideNavMenu, MenuItemGroup, ＭenuItem, SubMenu, Menu } from './menu';
import CollapseTransition from './collapse-transition';
import { Radio, RadioGroup } from './radio';
import { Checkbox, CheckboxGroup } from './checkbox';
import { Select, SelectOption, DesginSelector } from './select';
import PgDialog from './dialog';
import PgLoading from './loading';
import PropertySlot from './propertySlot';
import PgMessage from './message';
import { PgTable, PgTableColumn } from './table';
import PgScrollbar from './scrollbar';

import '@/scss/_icon.scss';

const components = [
  Slider,
  DesignSlider,
  Switch,
  DesignSwitch,
  Select,
  SelectOption,
  DesginSelector,
  Input,
  InputNumber,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Button,
  ButtonGroup,
  CollapseTransition,
  MenuCollapseTransition,
  MenuItemGroup,
  ＭenuItem,
  leftSideNavMenu,
  SubMenu,
  Menu,
  PropertySlot,
  DesignInputNumber,
  PgTable,
  PgTableColumn,
  PgScrollbar
];

const plugins = [PgDialog, PgLoading, PgMessage];

const install = (app, options) => {
  components.forEach(component => {
    app.component(component.name, component);
  });
  plugins.forEach(plugin => {
    app.use(plugin);
  });
};

export { PgMessage, PgLoading, PgDialog };

export default {
  install
};
