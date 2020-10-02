const buttonsRef = document.querySelectorAll("#counter button");
const span = document.querySelector("#value");
buttonsRef[0].addEventListener("click", decrement);
buttonsRef[1].addEventListener("click", increment);

function decrement() {
  span.textContent -= 1;
}

function increment() {
  span.textContent = Number(span.textContent) + 1;
}
