const container = document.querySelector('.container');
const button = document.querySelector('#btn');

button.addEventListener('click', deneme);

function deneme() {
  const square = document.createElement('div');
  container.appendChild(square);
  square.classList.add('square');
}
