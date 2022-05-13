const add_delete_Function = async (event) => {
  if (event.target.id === "deleteIndiv") {
    const itemID = [event.target.dataset.id, event.target.dataset.amount];
    const parentE = event.target.parentElement.parentElement;
    parentE.style.display = "none";
    const deleteItem = await fetch("/api/shoppinglist/delete", {
      method: "POST",
      body: JSON.stringify({ itemID }),
      headers: { "Content-Type": "application/json" },
    });
  }

  if (event.target.id === "addIndiv") {
    const itemID = [event.target.dataset.id, event.target.dataset.amount];
    const parentE = event.target.parentElement.parentElement;
    parentE.style.display = "none";
    const deleteItem = await fetch("/api/shoppinglist/add", {
      method: "POST",
      body: JSON.stringify({ itemID }),
      headers: { "Content-Type": "application/json" },
    });
  }
};

const addShoppingListItem = async (event) => {
  event.preventDefault();
  const ingredientName = document.querySelector('#AddNewItem').value.trim();
  const ingredientQuantity = document.querySelector('#Quantity').value.trim();
  const ingredientMeasurements = document.querySelector('#Measurements').value.trim();


  if (ingredientName && ingredientQuantity && ingredientMeasurements) {
    const response = await fetch('/api/shoppingList/addList', {
      method: 'POST',
      body: JSON.stringify({ ingredientName, ingredientQuantity, ingredientMeasurements }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('click1');

  };
  console.log('click2');

  window.location.replace('/groceryList');
};

document.querySelector('.addItmBtn').addEventListener('click', addShoppingListItem);
document.addEventListener("click", add_delete_Function);
