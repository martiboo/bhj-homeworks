let arrows = document.getElementsByClassName("slider__arrows");

let arr = Array.from(arrows);
for (i = 0; i < arr.length; i++) {
    let arrow = arr[i];
    arrow.onclick = showActive;
 }

function showActive(e) {
    let clickedButton = e.target;
    let subMenuElement = clickedButton.parentElement.querySelector(".slider__item");
   
    if (subMenuElement !== null) {
        subMenuElement.classList.toggle("slider__item_active");
        return false;
    } 
    return true;
}