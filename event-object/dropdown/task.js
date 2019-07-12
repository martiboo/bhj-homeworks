let menuElements = document.getElementsByClassName("dropdown__value");

let menuLinks = document.getElementsByClassName("dropdown__item");

let arrLinks = Array.from(menuLinks);
for (i = 0; i < arrLinks.length; i++) {
    let elementLink = arrLinks[i];
    elementLink.addEventListener("click", function (e) {
        e.preventDefault();
        let dropdownList = elementLink.parentElement;
        let value = dropdownList.parentElement.querySelector(".dropdown__value");
        let newValue = elementLink.querySelector(".dropdown__link");
        value.textContent = newValue.textContent;
        let dropdown = value.parentElement.querySelector(".dropdown__list");
        dropdown.classList.remove("dropdown__list_active");
    })
}

let arr = Array.from(menuElements);
for (i = 0; i < arr.length; i++) {
    let element = arr[i];
    element.addEventListener("click", function () {
        let dropdown = element.parentElement.querySelector(".dropdown__list");
        dropdown.classList.toggle("dropdown__list_active");
    })
}