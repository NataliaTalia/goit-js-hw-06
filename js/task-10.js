function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainBox = document.querySelector('#boxes');

const createButton = document.querySelector('[data-create]');
const removeButton = document.querySelector('[data-destroy]');

const input = document.querySelector('#controls > input');






function  createBoxes(amount) {
  const elements =[];
  let boxSize = 30;
  for(let i = 0; i < amount; i+= 1) {

    
    const box = document.createElement("div");
   
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

   elements.push(box);

    boxSize += 10;
    
  }
  mainBox.append(...elements);
}

function destroyBoxes () {

  mainBox.innerHTML = "";
}


createButton.addEventListener('click', () => {
 const amount = Number(input.value);

 createBoxes(amount);
})


removeButton.addEventListener('click', () => {
  destroyBoxes();
})