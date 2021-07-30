const form = document.querySelector("#form-value");
const list = document.querySelector("#list");
const input = document.querySelector("#value");

form.addEventListener("submit", e => {
    e.preventDefault();
    //create new item
    const item = document.createElement("div");
    item.innerText = input.value;
    //create class
    item.classList.add('item-list');
    
    //append child
    list.appendChild(item)
    //clear
    input.value = "";
    //remove
    item.addEventListener('click', () => {
        item.remove()
    })
})
