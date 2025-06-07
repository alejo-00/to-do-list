//DOM ELEMENTS
const counterList = document.getElementById("counter-list");
const inptDescription = document.getElementById("inpt-description");
const btnAdd = document.getElementById("btn-add");
const listTodo = document.getElementById("list-todo");


//VARIABLES
let count = 0;


//FUNCTION TO ADD ITEMS WHEN CLICK IN ADD BUTTON
const handlerItemAdd = (item = "") => {
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

    newDescription.className = "description";

    //CHECKING IF ITEM IS EMPTY OR NOT FOR ADDING DESCRIPTION
    newDescription.textContent = item != "" ? item : inptDescription.value;

    newItem.className = "col-md pt-1";

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
        handlerItemEdit(newItem);
    });
    counterItems();
    saveItems();
    clearInputs();
};


//FUNCTION TO DELETE ITEMS WHEN CLICK IN DELETE BUTTON
const handlerItemDelete = (newItem) => {
    newItem.remove();
    counterItems();
    saveItems();
};


//FUNCTION TO EDIT ITEMS WHEN CLICK IN EDIT BUTTON
const handlerItemEdit = (newItem) => {
        const newDescriptionEdited = document.createElement("input");
        newDescriptionEdited.value = newItem.textContent;
        console.log(newDescriptionEdited.value);
    
        newItem.innerHTML = "";
        newItem.appendChild(newDescriptionEdited);
    
        //NEW BOTON ADD
        const newBtnAdd = document.createElement("button");
            
        //NEW ICON ADD
        const newIconAdd = document.createElement("i");
        newIconAdd.className = "bi bi-check-square";

        newBtnAdd.appendChild(newIconAdd);
        newItem.appendChild(newBtnAdd);
        listTodo.appendChild(newItem);
        newBtnAdd.addEventListener("click", (e) => {
            e.preventDefault();
            handlerItemAdd(newDescriptionEdited.value);
            newItem.remove();
            counterItems();
        });
};


//FUNCTION TO COUNTER ITEMS WHEN IS ADD OR DELETE ITEMS
const counterItems = () => {
    const count_items = document.getElementsByTagName("li");
    counterList.textContent = count_items.length;
};


//FUNCTION TO SAVE ITEMS IN LOCAL STORAGE FOR PERSISTENCE AND LOAD LATER
const saveItems = () => {
    const items = document.getElementsByTagName("li");
    const listaItems = [];
    for (let i = 0; i < items.length; i++) {
        listaItems.push(items[i].textContent);
    };
    localStorage.setItem("todoList", JSON.stringify(listaItems));
};


//FUNCTION TO LOAD ITEMS FROM LOCAL STORAGE WHEN PAGE IS LOADED
const loadItems = () => {
    const items = JSON.parse(localStorage.getItem("todoList"));
    if (items) {
        items.forEach(item => {
            handlerItemAdd(item);
        });
    };
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
    loadItems();
    btnAdd.addEventListener("click", (e) => {
        if (validateDescription()) {
            e.preventDefault();
            handlerItemAdd();
        };
    });
    inptDescription.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            if (validateDescription()) {
                e.preventDefault();
                handlerItemAdd();
            };
        };
    });
});