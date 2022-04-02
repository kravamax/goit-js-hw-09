const ref = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  bodyStyle: document.body.style,
};
let timerId = null;

ref.start.addEventListener('click', onStartClick);
ref.stop.addEventListener('click', onStopClick);
ref.stop.disabled = true;

function onStartClick() {
  const DELAY = 1000;

  toggleButtons();

  timerId = setInterval(changeBackground, DELAY);
}

function onStopClick() {
  toggleButtons();
  clearInterval(timerId);
}

function changeBackground() {
  ref.bodyStyle.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function toggleButtons() {
  ref.start.disabled = ref.start.disabled ? false : true;
  ref.stop.disabled = ref.stop.disabled ? false : true;
}
