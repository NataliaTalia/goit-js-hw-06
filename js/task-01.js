


const categoriesRef = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesRef.length)


  categoriesRef.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent )
    console.log('Elements:', item.lastElementChild.children.length)
})