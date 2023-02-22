const input = document.querySelector('#font-size-control');

console.log(typeof input.min)

const textOutput = document.querySelector('#text');

textOutput.style.fontSize = input.min;

input.addEventListener('input', () => {

   let size = input.value;
   textOutput.style.fontSize = size + 'px';
})