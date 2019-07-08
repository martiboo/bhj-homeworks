let seconds = document.getElementById('timer');

let timerId = setInterval(countdown, 1000);

function countdown(){
    seconds.textContent--;
    if (seconds.textContent <= 0) {
        clearInterval(timerId);
        alert(`Вы победили в конкурсе`);
    }
}