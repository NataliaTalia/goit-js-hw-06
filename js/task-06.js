let textInput = document.querySelector('#validation-input');
const textInputNeeded = document.querySelector('[data-length="6"]')

console.log(textInput.value)

textInput.addEventListener('blur', () => {

    const necessaryLength = textInputNeeded.dataset.length;
    console.log(necessaryLength)

    const inputLength = textInput.value.length;
    console.log(inputLength)

    if (inputLength !== Number(necessaryLength)) {

        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
      } else {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
      
      }
   
})
