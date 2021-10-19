import Slider from './components/slider.vue';
import DesignSlider from './components/designSlider.vue';
const components = [
  Slider,
  DesignSlider
];

components.forEach(component => {
  component.install = (app) => {
    app.component(component.name, component);
  };
});

export {
  Slider,
  DesignSlider
};
