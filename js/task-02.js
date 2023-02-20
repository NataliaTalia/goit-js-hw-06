const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredient = ingredients[0]

const list = document.querySelector('ul')

const markup = ingredients.map(ingredient => {

  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;

  return listItem
})
 

 

 list.append(...markup)
 
 


