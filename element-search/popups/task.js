
let element = document.getElementById("modal_main"); 

function showActive() {
    element.classList.add("modal_active");
}

showActive();

let button = document.getElementsByClassName("modal__close");

function closeButton() {
    element.classList.remove("modal_active");
}

let arr = Array.from(button);
for (i = 0; i < arr.length; i++) {
    let properElement = arr[i];
    properElement.onclick = closeButton;
}

let successWindow = document.getElementById("modal_success");
let successButton = document.getElementsByClassName("show-success");

function showSuccess() {
    successWindow.classList.add("modal_active");
}

let arrTwo = Array.from(successButton);
let properButton = arrTwo[0];

properButton.onclick = showSuccess;

