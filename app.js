import { spin, stop } from './modules/symbols.js';

const click = new Audio('sounds/click2.mp3');

let interval;

document.getElementById('js-spin').addEventListener('click', () => {
  interval = setInterval(spin, 60);
  document.getElementById('js-spin').disabled = true;
  document.getElementById('js-stop').disabled = false;
  document.getElementById('js-result').innerHTML = '';
  click.play();
});

document.getElementById('js-stop').addEventListener('click', () => {
  clearInterval(interval);
  document.getElementById('js-spin').disabled = false;
  document.getElementById('js-stop').disabled = true;
  stop();
  click.play();
});
