const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const tempStorage = document.createDocumentFragment();

const partsList = ingredients.map(el => {
	const newEl = document.createElement("li");
	newEl.classList.add("item");
	newEl.textContent = el;
	tempStorage.append(newEl);
});
ingredientsList.append(tempStorage);