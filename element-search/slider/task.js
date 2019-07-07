let menuElements = document.getElementsByClassName("slider__arrows");

for(i = 0; i < menuElements.length; i++) {
    menuElements[i].addEventListener("click", showActive, false);
 }

function showActive() {
    menuElements.classList.add("slider__item_active");
}