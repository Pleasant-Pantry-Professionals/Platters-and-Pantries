
var addIngredientBtn = document.getElementById('addIngredientBtn');
const addIngredientHandler = async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    console.log(window.location.search.split('ID=')[1]);
    const recipeUrl = window.location.search.split('ID=')[1];
    // axios.get(recipeUrl).then((response) => {
    //     console.log(response);
    // })
    const response = await fetch('/api/pantry/add', {
        method: 'POST',
        body: JSON.stringify({recipeUrl}),
        headers: { 'Content-Type': 'application/json' },
    })


};
addIngredientBtn.addEventListener('click', addIngredientHandler);

// addIngredientBtn.addEventListener('click', async function (event) {
//     console.log('working')
//     const recipeUrl = window.location.search.split('ID=')[1];
//     const updateToTable = await fetch('/api/shoppinglist', {
//         method: 'POST',
//         body: JSON.stringify({recipeUrl}),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     console.log(addToTable, updateToTable)
// })
