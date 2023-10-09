const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});