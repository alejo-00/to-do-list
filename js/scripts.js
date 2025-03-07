//DOM ELEMENTS
const counterList = document.getElementById("counter-list");
const inptDescription = document.getElementById("inpt-description");
const btnAdd = document.getElementById("btn-add");
const listTodo = document.getElementById("list-todo");


let count = 0;


//FUNCTION TO ADD ITEMS WHEN CLICK IN ADD BUTTON
const handlerItemAdd = () => {
    if(validateDescription()){
        //NEW ITEM
        const newItem = document.createElement("li");
        newItem.id = `item${count}`
        count += 1;

        //NEW BOTON DELETE
        const newBtnDelete = document.createElement("button");

        //NEW ICON DELETE
        const newIconDelete = document.createElement("i");

        //NEW BOTON EDIT
        const newBtnEdit = document.createElement("button");

        //NEW ICON EDIT
        const newIconEdit = document.createElement("i");

        //NEW DESCRIPTION
        const newDescription = document.createElement("p");
        newDescription.textContent = inptDescription.value;

        newItem.className = "col-md d-flex justify-content-between pt-1";

        newIconEdit.className = "bi bi-pencil-square";
        newBtnEdit.appendChild(newIconEdit);

        newIconDelete.className = "bi bi-x-square";
        newBtnDelete.appendChild(newIconDelete);

        newItem.appendChild(newDescription);
        newItem.appendChild(newBtnEdit);
        newItem.appendChild(newBtnDelete);
        listTodo.appendChild(newItem);

        //CALL FUNCTION TO DELETE ITEMS WHEN CLICK IN DELETE BUTTON
        newBtnDelete.addEventListener("click", () => {
            handlerItemDelete(newItem);
        });

        //CALL FUNCTION TO EDIT ITEMS WHEN CLICK IN EDIT BUTTON
        newBtnEdit.addEventListener("click", () => {
            handlerItemEdit(newItem, newBtnEdit, newBtnDelete);
        });
        counterItems();
    };
    clearInputs();
};


//FUNCTION TO DELETE ITEMS WHEN CLICK IN DELETE BUTTON
const handlerItemDelete = (newItem) => {
    newItem.remove();
    counterItems();
};


//FUNCTION TO EDIT ITEMS WHEN CLICK IN EDIT BUTTON
const handlerItemEdit = (newItem, newBtnEdit, newBtnDelete) => {
    newItem.remove();
    const newDescriptionEdited = document.createElement("input");
    newDescriptionEdited.value = newItem.textContent;

    newItem.innerHTML = "";
    newItem.appendChild(newDescriptionEdited);

    //NEW BOTON ADD
    const newBtnAdd = document.createElement("button");
    newBtnAdd.addEventListener("click", (e) => {
        e.preventDefault();
        newItem.remove();
        const newItemEdited = document.createElement("li");
        const newDescriptionEditedSave = document.createElement("p");
        newDescriptionEditedSave.textContent = newDescriptionEdited.value;
        newItemEdited.appendChild(newDescriptionEditedSave);
        newItemEdited.appendChild(newBtnEdit);
        newItemEdited.appendChild(newBtnDelete);
        listTodo.appendChild(newItemEdited);
    });

    //NEW ICON ADD
    const newIconAdd = document.createElement("i");
    newIconAdd.className = "bi bi-check-square";

    newBtnAdd.appendChild(newIconAdd);
    newItem.appendChild(newBtnAdd);
    listTodo.appendChild(newItem);
};


//FUNCTION TO COUNTER ITEMS WHEN IS ADD OR DELETE ITEMS
const counterItems = () => {
    const count_items = document.getElementsByTagName("li");
    counterList.textContent = count_items.length;
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
        handlerItemAdd();
    });
});