let divReveal = document.getElementsByClassName("reveal");

let arrDivs = Array.from(divReveal);

window.addEventListener("scroll", function() {
    for (i = 0; i < arrDivs.length; i++) {
        let elementReveal = arrDivs[i];
    
        
        let isInViewport = function(element){ 
            const viewportHeight = window.innerHeight; 
            const elementTop = element.getBoundingClientRect().top;
            return elementTop > viewportHeight ? true : false;
        };
    
        if (isInViewport(elementReveal) === true) {
            elementReveal.classList.add("reveal_active");
        }
    }
    })
