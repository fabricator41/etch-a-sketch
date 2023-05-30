const container = document.querySelector('.container');
const button = document.querySelector('#btn');
const slider = document.getElementById('slider');

let squareNumber = 0;

button.addEventListener('click', deneme);
slider.addEventListener('input', deneme2);

function deneme2() {
  const value = document.getElementById('value');
  value.textContent = `${this.value} x ${this.value}`;
  squareNumber = Math.pow(this.value, 2);
}

function deneme() {
  for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.classList.add('square');
  }
}
