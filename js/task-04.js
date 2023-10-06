const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let couterValue = 0;

decrementBtn.addEventListener('click', () => {
  couterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener('click', () => {
  couterValue += 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueSpan.textContent = couterValue;
}