const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");
inputRef.addEventListener("keyup", changeName);
function changeName() {
  if (!inputRef.value) {
    spanRef.textContent = "Незнакомец";
    return;
  }
  spanRef.textContent = inputRef.value;
}
