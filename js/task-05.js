const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', onInput);

function onInput(evt) {
	outputText.textContent = !evt.currentTarget.value ? 'Anonymous' : evt.currentTarget.value;
};