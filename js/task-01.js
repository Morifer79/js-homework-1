const itemCategory = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemCategory.length}`);

itemCategory.forEach(el => {

	console.log(`Category: ${el.children[0].textContent}`);
	console.log(`Elements: ${el.children[1].children.length}`);
});