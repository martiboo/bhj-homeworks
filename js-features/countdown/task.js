let seconds = document.getElementById('timer');

function countdown(){
    seconds.textContent--;
    if (seconds.textContent <= 0) {
        clearInterval(countdown);
        alert(`Вы победили в конкурсе`);
    }
}

setInterval(countdown, 1000);