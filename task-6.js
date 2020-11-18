const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", handlerValidity);
const desiredLength = Number(inputRef.dataset.length);
inputRef.placeholder = `Введите ${desiredLength} символов`;

function handlerValidity() {
  if (this.value.length === desiredLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
    return;
  }
  this.classList.remove("valid");
  this.classList.add("invalid");
}
