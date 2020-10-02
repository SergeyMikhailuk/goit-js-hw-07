const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("change", handlerChangeFontSize);

function handlerChangeFontSize() {
  console.log(this.value);
  textRef.style.fontSize = `${this.value}px`;
}
