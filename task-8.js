const inputRef = document.querySelector("#controls input");
const renderBtnRef = document.querySelector("button[data-action='render']");
const destroyBtnRef = document.querySelector("button[data-action='destroy']");
const boxesDivRef = document.querySelector("#boxes");
const boxes = [];
let sizeBox = 20;

const random = (num) => Math.floor(Math.random() * num + 1);

renderBtnRef.addEventListener("click", createBoxes);
function createBoxes() {
  for (let i = 0; i <= inputRef.value; i += 1) {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.width = `${sizeBox}px`;
    span.style.height = `${sizeBox}px`;
    span.style.backgroundColor = `rgb(${random(256)},${random(256)},${random(
      256
    )})`;
    console.log(inputRef.value);
    sizeBox += 1;
    boxes.push(span);
  }
  boxesDivRef.append(...boxes);
}
