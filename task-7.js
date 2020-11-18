const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", handlerChangeFontSize);

function handlerChangeFontSize() {
  textRef.style.fontSize = `${this.value}px`;
}
