
let modalMain = document.getElementById("modal_main"); 

modalMain.classList.add("modal_active");

let button = document.getElementsByClassName("modal__close");

function closeButton(e) {
    let clickedButton = e.target;
    let modalContent = clickedButton.parentElement;
    let modal = modalContent.parentElement;
    modal.classList.remove("modal_active");
}

let arr = Array.from(button);
for (i = 0; i < arr.length; i++) {
    let properElement = arr[i];
    properElement.onclick = closeButton;
}

let successWindow = document.getElementById("modal_success");
let successButton = document.getElementsByClassName("show-success");

function showSuccess() {
    modalMain.classList.remove("modal_active");
    successWindow.classList.add("modal_active");
}

let arrTwo = Array.from(successButton);
let properButton = arrTwo[0];

properButton.onclick = showSuccess;