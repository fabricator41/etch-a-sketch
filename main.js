const container = document.querySelector('.container');
const button = document.querySelector('#btn');
const slider = document.getElementById('slider');

let squareNumber = 256;
createSquares();

button.addEventListener('click', () => {
  reset();
  createSquares();
});
slider.addEventListener('input', sliderValue);

function sliderValue() {
  const value = document.getElementById('value');
  value.textContent = `${this.value} x ${this.value}`;
  squareNumber = Math.pow(this.value, 2);
}

function reset() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function createSquares() {
  let width = 800 / Math.sqrt(squareNumber);
  let height = width;

  for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.classList.add('square');
    square.style.height = `${width}px`;
    square.style.width = `${height}px`;
    square.addEventListener('mouseover', black);
  }
}

function black() {
  this.classList.add('black');
}
