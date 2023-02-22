const inputField = document.querySelector('#name-input');

const output = document.querySelector('#name-output');


inputField.addEventListener('input', (event) => {
   
    output.textContent = event.currentTarget.value;

    console.log(event.currentTarget.value)
      
})

inputField.addEventListener('focus', (event) => {
    if(event.currentTarget.value === "") {
        output.textContent = "Anonymous"
    }
})

inputField.addEventListener('blur', (event) => {
    if(event.currentTarget.value === "") {
        output.textContent = "Anonymous"
    }
})