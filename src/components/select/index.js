import Select from './components/select.vue';
import SelectOption from './components/selectOption.vue';
import DesginSelector from './components/designSelect.vue';

const components = [
  DesginSelector,
  SelectOption,
  Select
];

components.forEach(component => {
  component.install = (app) => {
    app.component(component.name, component);
  };
});

export {
  DesginSelector,
  SelectOption,
  Select
};
