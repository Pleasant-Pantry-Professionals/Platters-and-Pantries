const init = async () => 

{const updateToTable = await fetch('/api/shoppinglist', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})}



const remove = document.querySelector('.delete');

const deleteFunction = async (event) =>{
    if(event.target.id === 'delete') {
    console.log(event.target.dataset.id)
    
    const itemID = [event.target.dataset.id, event.target.dataset.amount]

    console.log(itemID)
    const deleteItem = await fetch('/api/shoppinglist/delete', {
        method:'POST',
        body:JSON.stringify({itemID}),
        headers: { 'Content-Type': 'application/json' }
    })

}
}

init()
document.addEventListener('click',deleteFunction)