import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onClickSubmit);

function onClickSubmit(e) {
  e.preventDefault();

  const formData = e.currentTarget.elements;
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  setTimeout(() => {
    for (let i = 0; i < amount.value; i += 1) {
      createPromise(i, step.value)
        .then(value => value)
        .catch(error => error);
    }
  }, delay.value);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      shouldResolve
        ? resolve(onSuccess({ position: (position += 1), delay }))
        : reject(onError({ position: (position += 1), delay }));
    }, delay * position);
  });
}

function onSuccess({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}
