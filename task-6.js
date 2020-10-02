const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", handlerValidity);

function handlerValidity() {
  if (this.value.length <= this.dataset.length) {
    this.classList.add("valid");
    this.classList.remove("invalid");
    return;
  }
  this.classList.remove("valid");
  this.classList.add("invalid");
}
