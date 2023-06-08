const addListenerBtnDecrement = document.querySelector('[data-action="decrement"]');
const addListenerBtnIncrement = document.querySelector('[data-action="increment"]');
const getCounterValue = document.querySelector('#value');
let counterValue = 0;

addListenerBtnDecrement.addEventListener("click", () => {
	getCounterValue.textContent = --counterValue;
});

addListenerBtnIncrement.addEventListener("click", () => {
	getCounterValue.textContent = ++counterValue;
});