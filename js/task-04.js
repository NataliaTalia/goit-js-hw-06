let counterValue = 0;

let add = document.querySelector('button[data-action="increment"]');

add.addEventListener('click', () => {
    let value = document.querySelector('#value');
    counterValue += 1; 
    value.innerHTML = counterValue;
})

let subtract = document.querySelector('button[data-action="decrement"]');

subtract.addEventListener('click', () => {
    let value = document.querySelector('#value');
    let result = Number(value.innerText) - 1; 
    value.innerText = result;
})

//Зробила двома способами. Який краще використовувати?