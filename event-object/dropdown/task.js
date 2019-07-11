 let menuElements = document.getElementsByClassName("dropdown__link");

 let arr = Array.from(menuElements);
 for (i = 0; i < arr.length; i++) {
     let element = arr[i];
     element.onclick = showActive;
  }
 
 function showActive(e) {
     let clickedButton = e.target;
     let subMenuElement = clickedButton.parentElement.querySelector(".dropdown__value");
    
     if (subMenuElement !== null) {
         subMenuElement.classList.toggle("dropdown__list_active");
         return false;
     } 
     return true;
 }

 