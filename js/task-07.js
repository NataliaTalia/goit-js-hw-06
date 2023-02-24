const input = document.querySelector('#font-size-control');

console.log(typeof input.min)

const textOutput = document.querySelector('#text');

textOutput.style.fontSize = input.value + 'px';

input.addEventListener('input', () => {

   
   textOutput.style.fontSize = input.value + 'px';
})