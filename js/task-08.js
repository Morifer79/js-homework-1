const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
	e.preventDefault();
	const email = e.target.elements.email.value;
	const password = e.target.elements.password.value;
	if (!email || !password) {
		alert('Всі поля повинні бути заповнені!');
		return;
	}
	const formData = {
		email,
		password,
	};
	console.log(formData);
	form.reset();
}