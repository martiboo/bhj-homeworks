let tabs = document.getElementsByClassName("tab");

let arr = Array.from(tabs);
for (i = 0; i < arr.length; i++) {
    let element = arr[i];
    element.addEventListener("click", function() {
        element.classList.toggle("tab__content_active");
    })
}
