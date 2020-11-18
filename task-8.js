const inputRef = document.querySelector("#controls input");
const renderBtnRef = document.querySelector("button[data-action='render']");
const destroyBtnRef = document.querySelector("button[data-action='destroy']");
const boxesDivRef = document.querySelector("#boxes");

//style for main container
boxesDivRef.style.display = "flex";
boxesDivRef.style.flexWrap = "wrap";
//style for main container

const boxes = [];
let sizeBox = 30;
const random = (num) => Math.floor(Math.random() * num + 1);

renderBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", hendlerDestroy);

function createBoxes() {
  console.time("Time to fill");
  for (let i = 0; i < inputRef.value; i += 1) {
    const span = document.createElement("span");
    span.style.display = "block";
    span.style.width = `${sizeBox + 10 * i}px`;
    span.style.height = `${sizeBox + 10 * i}px`;
    span.style.fontSize = 0;
    span.style.backgroundColor = `rgb(${random(256)},${random(256)},${random(
      256
    )})`;
    boxes.push(span);
  }
  boxesDivRef.innerHTML = null;
  boxesDivRef.append(...boxes);
  console.timeEnd("Time to fill");
}

function hendlerDestroy() {
  // boxes.splice(0, boxes.length);
  boxes = [];
  boxesDivRef.innerHTML = `<h1>Очищено</h1>`;
}
