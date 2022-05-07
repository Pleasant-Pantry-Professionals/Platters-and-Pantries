

const submit = document.querySelector('#search-dish')

submit.addEventListener("click", async function (event) {
  event.preventDefault();
  const dish = document.querySelector('#searchdish').value;

  console.log('DISH', dish);
  window.location = "/?dish=" + dish;
  // const response = await fetch('/api/recipe/', {
  //   method: 'POST',
  //   body: JSON.stringify({ dish }),
  //   headers: { 'Content-Type': 'application/json', },
  // });
  // const data = await response.json();
  // console.log(data);
  // //outputs actual ingredients now
  // data.hits.forEach(function (element) {
  //   console.log(element.recipe.ingredients);
  //   const ingredientsArray = element.recipe.ingredients;
  //   ingredientsArray.forEach(function (ingredient) {
  //     console.log(ingredient.food, ingredient.quantity, ingredient.measure);
  //   });
  // });
});
