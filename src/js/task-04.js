const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

incrementBtn.addEventListener('click', onIncrementBtn);
decrementBtn.addEventListener('click', onDecrementBtn);


function onIncrementBtn() {
    currentValue++;
    counterValue.textContent = currentValue;
}

function onDecrementBtn() {
    currentValue--;
    counterValue.textContent = currentValue;
}