
let fontButtons = document.getElementsByClassName("font-size");

let arrButtons = Array.from(fontButtons);

for (i = 0; i < arrButtons.length; i++) {
    let elementFont = arrButtons[i];

    elementFont.addEventListener("click", function(e) {
        e.preventDefault();
        let activeElementFont = elementFont.parentElement.querySelector(".font-size_active");
        activeElementFont.classList.remove("font-size_active");
        elementFont.classList.add("font-size_active");

        let attr = elementFont.getAttribute("data-size");

        let book = document.getElementsByClassName("book");

        let arrBooks = Array.from(book);
        
        let index = arrButtons.indexOf(elementFont);
        let activeBook = arrBooks[index];

        if (attr === "small") {
            activeBook.classList.add("book_fs-small");
        }
        if (attr === "big") {
            activeBook.classList.add("book_fs-big");
        }
    })
}





