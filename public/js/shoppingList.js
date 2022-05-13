

const add_delete_Function = async (event) => {
  if (event.target.id === "delete") {
    const itemID = [event.target.dataset.id, event.target.dataset.amount];
    const parentE = event.target.parentElement.parentElement;
    parentE.style.display = "none";
    const deleteItem = await fetch("/api/shoppinglist/delete", {
      method: "POST",
      body: JSON.stringify({ itemID }),
      headers: { "Content-Type": "application/json" },
    });
  }

  if (event.target.id === "add") {
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


document.addEventListener("click", add_delete_Function);
