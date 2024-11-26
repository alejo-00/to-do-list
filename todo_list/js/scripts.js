//DOM ELEMENTS
const counterList = document.getElementById("counter-list");
const inptDescription = document.getElementById("inpt-description");
const btnAdd = document.getElementById("btn-add");
const listTodo = document.getElementById("list-todo");
let count = 0;

const itemAgree = () => {
    if(validateDescription()){
        const itemDescription = inptDescription.value;
        const newItem = document.createElement("li");
        const newBtnDelete = document.createElement("button");
        newItem.textContent = itemDescription;
        listTodo.appendChild(newItem).appendChild(newBtnDelete);
        count += 1;
        counterList.textContent = count;
    }
    clearInputs();
};

const clearInputs = () => {
    inptDescription.value = "";
};

const validateDescription = () => {
    if(inptDescription.value == ""){
        alert("Error! a description must be entered");
        return false;
    }
    else{
        return true;
    };
    
};

document.addEventListener("DOMContentLoaded", function() {
    btnAdd.addEventListener("click", (e) => {
        e.preventDefault();
        itemAgree();
        // console.log(e);
    })
});