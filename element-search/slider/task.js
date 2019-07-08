let arrows = document.getElementsByClassName("slider__arrows");
let sliderItems = document.getElementsByClassName("slider__item");
let arrItems = Array.from(sliderItems);

let currentIndex = 0;

function clickArrow(e) {
    let clickedArrow = e.target;
    arrItems[currentIndex].classList.remove("slider__item_active");
    
    if (clickedArrow.classList.contains("slider__arrow_prev")) {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = (arrItems.length - 1);
        }

    } else {
        currentIndex++;
        if (currentIndex === arrItems.length) {
            currentIndex = 0;
        }
    }
    arrItems[currentIndex].classList.add("slider__item_active");
}

let arr = Array.from(arrows);
for (i = 0; i < arr.length; i++) {
    let arrow = arr[i];
    arrow.onclick = clickArrow;
}