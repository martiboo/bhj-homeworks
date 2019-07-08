function getHole(index) {
    return document.getElementById('hole' + index);
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.onclick = function() {
        clickMole(i);
    }
}

let countMole = document.getElementById('dead');
let countLost = document.getElementById('lost');

function clickMole(index) {
    let hole = getHole(index);
    let winHole = hole.classList.contains( 'hole_has-mole' );

    if (winHole) {
        countMole.textContent++;
    } else {
        countLost.textContent++;
    }
    
    function newStatistic() {
        countMole.textContent = 0;
        countLost.textContent = 0;
    }
    
    if (countMole.textContent >= 5) {
        alert('Победа!');
        newStatistic();
    }
    
    if (countLost.textContent >= 5) {
        alert('Поражение');
        newStatistic();
    }
}