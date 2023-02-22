function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainBox = document.querySelector('#boxes');

const createButton = document.querySelector('[data-create]');
const removeButton = document.querySelector('[data-destroy]');

const input = document.querySelector('#controls > input');

let boxSize = 30;

let boxColor = getRandomHexColor();

function  createBoxes(amount) {

  for(let i = 0; i <= amount; i+= 1) {

    const box = document.createElement("div");
   
    box.style.height = "30px";
    box.style.width = "30px";
    box.style.backgroundColor = boxColor;

    mainBox.appendChild(box);

    boxSize += 10;
    boxColor = getRandomHexColor();
  }

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