//DOM ELEMENTS
const counterList = document.getElementById("counter-list");
const inptDescription = document.getElementById("inpt-description");
const btnAdd = document.getElementById("btn-add");
const listTodo = document.getElementById("list-todo");


//FUNCTION TO ADD ITEMS WHEN CLICK IN ADD BUTTON
const itemAdd = () => {
    if(validateDescription()){
        const itemDescription = inptDescription.value;
        //NEW ITEM
        const newItem = document.createElement("li");
        //NEW BOTON DELETE
        const newBtnDelete = document.createElement("button");
        //NEW ICON DELETE
        const newIconDelete = document.createElement("i");
        //NEW BOTON EDIT
        const newBtnEdit = document.createElement("button");
        //NEW ICON EDIT
        const newIconEdit = document.createElement("i");
        newItem.textContent = itemDescription;
        newItem.className = "col-md d-flex justify-content-between pt-1";
        newIconEdit.className = "bi bi-pencil-square";
        newBtnEdit.appendChild(newIconEdit);
        newIconDelete.className = "bi bi-x-square";
        newBtnDelete.appendChild(newIconDelete);
        newItem.appendChild(newBtnEdit);
        newItem.appendChild(newBtnDelete);
        listTodo.appendChild(newItem);


        //FUNCTION TO DELETE ITEMS WHEN CLICK IN DELETE BUTTON
        newBtnDelete.addEventListener("click", (e) => {
            e.preventDefault();
            newItem.remove();
            counterItems();
        });
        counterItems();
    };
    clearInputs();
};


//FUNCTION TO COUNTER ITEMS WHEN IS ADD OR DELETE ITEMS
const counterItems = () => {
    let count = document.getElementsByTagName("li");
    counterList.textContent = count.length;
};


//FUNCTION TO CLEAR INPUTS WHEN IS ADD DESCRIPTION I
const clearInputs = () => {
    inptDescription.value = "";
};


//FUNCTION TO VALIDATE DESCRIPTION CONTENT CAN NOT BE EMPTY
const validateDescription = () => {
    if(inptDescription.value == ""){
        alert("Error! a description must be entered");
        return false;
    }
    else{
        return true;
    };
    
};


//READY
document.addEventListener("DOMContentLoaded", function() {
    btnAdd.addEventListener("click", (e) => {
        e.preventDefault();
        itemAdd();
    });
});