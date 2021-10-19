import Radio from './components/radio.vue';
import RadioGroup from './components/radio-gruop.vue';
const components = [
  Radio,
  RadioGroup
];
components.forEach(component => {
  component.install = (app) => {
    app.component(component.name, component);
  };
});
export {
  Radio,
  RadioGroup
};
