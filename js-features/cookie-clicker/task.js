let image = document.getElementById("cookie"), even = true;
function changeSizes() {
    let count = document.getElementById("clicker__counter");
    count.textContent++;
    if (even) {
        image.width = 262; 
        image.height = 196; 
        even = false;
     } else {
        image.width = 230; 
        image.height = 170; 
        even = true;
     }
}

image.onclick = changeSizes;


 
 
      
 
                      
 
     