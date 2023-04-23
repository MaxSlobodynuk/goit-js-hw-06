const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientArea = document.querySelector('#ingredients')

const ingredientNewEl = [];
ingredients.forEach(ingredient => {
  const elem = document.createElement('li');
  elem.classList.add('item')
  elem.textContent = ingredient
  ingredientNewEl.push(elem);
})

ingredientArea.append(...ingredientNewEl)