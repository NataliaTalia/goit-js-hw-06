const inputField = document.querySelector('#name-input');

const output = document.querySelector('#name-output');


inputField.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;
})