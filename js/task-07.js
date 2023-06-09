const rangeInput = document.getElementById('font-size-control');
const textInput = document.getElementById('text');

const handleInputChange = () => textInput.style.fontSize = `${rangeInput.value}px`;

rangeInput.addEventListener('input', handleInputChange);