import Switch from './components/switch.vue';
import DesignSwitch from './components/designSwitch.vue';
const components = [
  Switch,
  DesignSwitch
];

components.forEach(component => {
  component.install = (app) => {
    app.component(component.name, component);
  };
});

export {
  DesignSwitch,
  Switch
};
