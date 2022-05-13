//hiting enter clears search for some reason

const submitClick = document.querySelector('#search-dish');
const submitKey = document.querySelector('#searchdish');


const submitHandler = async (event) => {
  event.preventDefault();
  const dish = document.querySelector('#searchdish').value;
  console.log('DISH', dish);
  window.location = "/?dish=" + dish;
};


submitClick.addEventListener("click", submitHandler);

submitKey.addEventListener("keypress", function(event) {
  
  if (event.key === 'Enter') {
    submitHandler(event)
  }
})

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


const ingredientsBtns = document.querySelectorAll('.ingredient_btn')

const ingredientHandler = async (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
  recipeID = event.target.id;

  console.log('click');
  window.location = '/dish/?recipeID=' + recipeID;
};

ingredientsBtns.forEach(ingredientsBtn => {
  ingredientsBtn.addEventListener('click', ingredientHandler);
});

const oneSearchBtns = document.querySelectorAll('.oneSearch');
const oneSearchHandler = async (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
  dish = event.target.id;
  console.log('DISH', dish);
  window.location = "/?dish=" + dish;
};

oneSearchBtns.forEach(oneSearchBtn => {
  oneSearchBtn.addEventListener('click', oneSearchHandler);
});


// responsive nav bar
var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem);

   // with jquery

  $(document).ready(function(){
   $('.sidenav').sidenav();
  });







