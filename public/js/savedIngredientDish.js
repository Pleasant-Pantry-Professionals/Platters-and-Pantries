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

//handles sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});