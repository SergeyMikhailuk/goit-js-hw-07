const itemsRef = document.querySelectorAll(".item");
console.log(`В списке ${itemsRef.length} категории.`);
itemsRef.forEach((item) => {
  const titleRef = item.querySelector("h2").textContent;
  console.log(`Категория: ${titleRef}`);
  const itemsLength = item.querySelectorAll(".js-list .js-item").length;
  console.log(`Количество элементов: ${itemsLength}`);
});
