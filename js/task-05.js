const inputField = document.querySelector('#name-input');

const output = document.querySelector('#name-output');


inputField.addEventListener('input', (event) => {

    if(event.currentTarget.value === "") {
        output.textContent = "Anonymous"
    }
 else {
   
    output.textContent = event.currentTarget.value;}

     
})

