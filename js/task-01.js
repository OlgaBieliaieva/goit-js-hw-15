const categoriesItemsRef = document.querySelectorAll(".item");

// ? Count the number of categories

console.log(`Number of categories: ${categoriesItemsRef.length}`);

// ?  Count the number of elements in each category

const showCategories = categoriesItemsRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
