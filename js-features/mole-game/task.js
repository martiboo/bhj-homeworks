function getHole(index) {
    return document.getElementById("hole" + index);
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.onclick = function() {
        clickMole(i);
    }
}


function clickMole(index) {
    let countMole = document.getElementById("dead");
    let countLost = document.getElementById("lost");
    let hole = getHole(index);
    let winHole = hole.classList.contains( 'hole_has-mole' );

    if (winHole.onclick) {
        countMole.textContent++;; 
    } 
    if (hole.onclick) {
        countLost.textContent++;
    } 
}