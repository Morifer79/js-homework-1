const inputField = document.getElementById('validation-input');

inputField.addEventListener('blur', () => {
	const dataLength = Number(inputField.getAttribute('data-length'));
	const inputLength = inputField.value.length;

	if (inputLength === dataLength) {
		inputField.classList.add('valid');
		inputField.classList.remove('invalid');
	} else {
		inputField.classList.add('invalid');
		inputField.classList.remove('valid');
	}
});