const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const listRef = document.querySelector("#ingredients");
function createMarkup(item) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  return listItem;
}

const listItems = ingredients.map((item) => createMarkup(item));
console.dir(listItems);
listRef.append(...listItems);
