const addIndividualIngredientHandler = async (event) => {
    event.preventDefault();
    const ingredientName = document.querySelector('#AddNewItem').value.trim();
    const ingredientQuantity = document.querySelector('#Quantity').value.trim();
    const ingredientMeasurements = document.querySelector('#Measurements').value.trim();

    if (ingredientName && ingredientQuantity && ingredientMeasurements) {
        const response = await fetch('/api/pantry/addIndividualPantry', {
            method: 'POST',
            body: JSON.stringify({ ingredientName, ingredientQuantity, ingredientMeasurements }),
            headers: { 'Content-Type': 'application/json' },
        });
    };
    document.location.reload();
};

document.querySelector('.addItmBtn').addEventListener('click', addIndividualIngredientHandler);
