let menuElements = document.getElementsByClassName("menu__link");

let arr = Array.from(menuElements);
for (i = 0; i < arr.length; i++) {
    arr[i].onclick = showActive;
    let argument = arr[i];
    if (argument.onclick) {
        showActive(argument);
    }
 }

let subMenuElements = menuElements.querySelectorAll("menu_sub");


function showActive(argument) {
    subMenuElements.classList.add("menu_active");
}


subMenuElements.onclick = showActive;