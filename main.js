const value = document.querySelector("#value");
const range = document.querySelector("input[type=range]");
const apply = document.querySelector("button");
const container = document.querySelector(".container");

value.textContent = `${range.value} x ${range.value}`;

range.addEventListener("change", () => {
  value.textContent = `${range.value} x ${range.value}`;
});

apply.addEventListener("click", draw);

function draw() {
  if (container.hasChildNodes) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  let numberOfSquares = (+range.value) ** 2;
  let deneme = (800 * 800) / numberOfSquares;
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.style.width = `${Math.sqrt(deneme)}px`;
    square.style.height = `${Math.sqrt(deneme)}px`;
    square.classList.add("square");
    container.appendChild(square);
  }
  changeColor();
}

function changeColor() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((item) =>
    item.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    })
  );
}
