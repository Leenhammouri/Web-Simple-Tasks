const alert = document.querySelector('.alert');
const groceryInput = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
const groceryContainer = document.querySelector('.grocery-container');
const form = document.querySelector(".grocery-form");


let editBtn, deleteBtn, editID = "", editFlag = false, editElement, editItemTitle;
console.log(editElement);


function addItem(e) {

    e.preventDefault();

    itemValue = groceryInput.value;
    const id = new Date().getTime().toString();

    if (itemValue !== "" && !editFlag) {
        const item = document.createElement('div');
        item.classList.add('grocery-item');

        const itemTitle = document.createElement('p');
        itemTitle.innerText = itemValue;

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');

        const edit = document.createElement('button');
        edit.classList.add('edit-btn');
        const editIcon = document.createElement('i');
        editIcon.classList.add("fa-solid");
        editIcon.classList.add("fa-pen-to-square");
        edit.addEventListener("click", editItemFunction);

        const trash = document.createElement('button');
        trash.classList.add('delete-btn');
        const trashIcon = document.createElement('i');
        trashIcon.classList.add("fa-solid");
        trashIcon.classList.add("fa-trash");
        trash.addEventListener("click", deleteItemFunction);



        trash.appendChild(trashIcon);
        edit.appendChild(editIcon);

        btnContainer.appendChild(edit);
        btnContainer.appendChild(trash);

        item.appendChild(itemTitle);
        item.appendChild(btnContainer);

        groceryList.appendChild(item);

        dispalyAlert("item add to the list", "success");
        groceryContainer.classList.add('show-container');
        groceryInput.value = "";

    } else if (itemValue !== "" && editFlag) {
        editItemTitle.innerText = itemValue;
        dispalyAlert("value changed", "success");
        submitBtn.innerText = "submit";
    }
    else {
        dispalyAlert("please enter a value", "danger");
    }

    groceryInput.value = "";
    editFlag = false;

}

function dispalyAlert(text, action) {
    alert.innerText = text;
    if (action === "success")
        alert.classList.add('alert-success');
    else {
        alert.classList.add('alert-danger');
    }

    setTimeout(function () {
        alert.innerText = " ";
        if (action === "success")
            alert.classList.remove('alert-success');
        else {
            alert.classList.remove('alert-danger');
        }
    }, 1000);
}


function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length > 0) {
        for (i = 0; i < items.length; i++) {
            groceryList.removeChild(items[i]);
        };

    }
    groceryContainer.classList.remove('show-container');
    dispalyAlert("empty list", "danger");

}

function deleteItemFunction(e) {
    const item = e.target.closest('.grocery-item');
    if (item) {
        groceryList.removeChild(item);
        dispalyAlert("item removed from the list", "danger");
    }

    const items = document.querySelectorAll('.grocery-item');
    if (items.length === 0) {
        groceryContainer.classList.remove('show-container');
        dispalyAlert("empty list", "danger");
    }

}


function editItemFunction(e) {
    editElement = e.target.closest('.grocery-item');
    editItemTitle = editElement.querySelector('p');
    groceryInput.value = editItemTitle.innerText;
    editFlag = true;
    submitBtn.innerText = "Edit";
}


form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
