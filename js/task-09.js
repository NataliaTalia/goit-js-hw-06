function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const colorRef = document.querySelector('.color');

buttonRef.addEventListener('click', onButtonClicker);

function onButtonClicker (event) {
bodyRef.style.backgroundColor = getRandomHexColor();

colorRef.textContent = bodyRef.style.backgroundColor;

}