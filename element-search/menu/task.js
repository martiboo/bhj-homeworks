let menuElements = document.getElementsByClassName("menu__link");

let arr = Array.from(menuElements);
for (i = 0; i < arr.length; i++) {
    let element = arr[i];
    element.onclick = showActive;
 }

function showActive(e) {
    let clickedButton = e.target;
    let subMenuElement = clickedButton.parentElement.querySelector(".menu_sub");
   
    if (subMenuElement !== null) {
        subMenuElement.classList.toggle("menu_active");
        return false;
    } 
    return true;
}