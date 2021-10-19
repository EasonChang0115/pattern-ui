import Checkbox from './components/checkbox.vue';
import CheckboxGroup from './components/checkbox-group.vue';
const components = [
  Checkbox,
  CheckboxGroup
];
components.forEach(component => {
  component.install = (app) => {
    app.component(component.name, component);
  };
});
export {
  Checkbox,
  CheckboxGroup
};
