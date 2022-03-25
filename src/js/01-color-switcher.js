const ref = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let timerId = null;

ref.start.addEventListener('click', onStartClick);
ref.stop.addEventListener('click', onStopClick);
ref.stop.disabled = true;

function onStartClick() {
  ref.start.disabled = true;
  ref.stop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    // console.log('Start click');
  }, 1000);
}

function onStopClick() {
  ref.start.disabled = false;
  ref.stop.disabled = true;

  clearInterval(timerId);
  //   console.log('Stop click');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
