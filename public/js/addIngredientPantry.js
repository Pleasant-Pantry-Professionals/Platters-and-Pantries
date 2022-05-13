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


const add_delete_Function = async (event) => {
    if (event.target.id === "deleteIndiv") {
      const itemID = [event.target.dataset.id, event.target.dataset.amount];
      const parentE = event.target.parentElement.parentElement;
      parentE.style.display = "none";
      const deleteItem = await fetch("/api/pantry/deleteI", {
        method: "POST",
        body: JSON.stringify({ itemID }),
        headers: { "Content-Type": "application/json" },
      });
    }
  
    if (event.target.id === "addIndiv") {
      const itemID = [event.target.dataset.id, event.target.dataset.amount];
      const parentE = event.target.parentElement.parentElement;
      parentE.style.display = "none";
      const deleteItem = await fetch("/api/pantry/addI", {
        method: "POST",
        body: JSON.stringify({ itemID }),
        headers: { "Content-Type": "application/json" },
      });
    }
  };
  

  document.addEventListener("click", add_delete_Function);
