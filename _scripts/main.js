import { author } from '../package.json';
import BeforeAfterImageSlider from "./before-after-image-slider.js";

document.addEventListener('DOMContentLoaded', event => {
  document.querySelectorAll(".before-after-image-slider").forEach((element) => {
    let view = new BeforeAfterImageSlider(element, {});
  });  
});
