const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
let newEl;

ingredients.forEach(el => {
	newEl = document.createElement("li");
	newEl.classList.add("item");
	newEl.textContent = el;
	ingredientsList.append(newEl);
});

console.log(newEl);