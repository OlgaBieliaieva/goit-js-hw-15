let counterValue = 0;

const makeDecrement = () => {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
};

const makeIncrement = () => {
  counterValue += 1;
  refs.counter.textContent = counterValue;
};

const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", makeDecrement);
refs.incrementBtn.addEventListener("click", makeIncrement);
