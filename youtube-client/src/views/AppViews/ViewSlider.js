import '../StyleViews/Slider.css';
import '../StyleViews/normalize.css';

export default function ViewSlider() {
  if (document.querySelector('.slider')) {
    document.querySelector('.slider-wrapper').removeChild(document.querySelector('.slider'));
    document.querySelector('.slider-wrapper').removeChild(document.querySelector('.buttons'));
  }
  const slider = document.createElement('div');
  const buttons = document.createElement('div');
  buttons.className = 'buttons';
  slider.className = 'slider';
  buttons.innerHTML = '<button class="previous"><</button><div class="number">1</div><button class="next" toollip>></button>';
  document.querySelector('.slider-wrapper').appendChild(slider);
  document.querySelector('.slider-wrapper').appendChild(buttons);
}
