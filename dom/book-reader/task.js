
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
        let book = document.querySelector("#book");

        if (attr === "small") {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        }
        else if (attr === "big") {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        }
        else{
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");

        }
    })
}





