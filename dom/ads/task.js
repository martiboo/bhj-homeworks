let rotatorCase = document.getElementsByClassName("rotator__case");

let arrRotator = Array.from(rotatorCase);

let index = 0;

let timerId = setInterval(countdown, 1000);
function countdown() {
    arrRotator[index].classList.remove("rotator__case_active");
    index++;
    if (index === arrRotator.length) {
        index = 0;
    }
    arrRotator[index].classList.add("rotator__case_active");
}