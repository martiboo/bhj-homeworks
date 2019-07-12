let tabs = document.getElementsByClassName("tab");

let arrTabs = Array.from(tabs);

for (i = 0; i < arrTabs.length; i++) {
    let elementTab = arrTabs[i];
    elementTab.addEventListener("click", function() {
        let activeElementTab = elementTab.parentElement.querySelector(".tab_active");
        
        activeElementTab.classList.remove("tab_active");
        elementTab.classList.add("tab_active");

        let indexTab = arrTabs.indexOf(elementTab);


        let tabNavigation = elementTab.parentElement;
        let contents = tabNavigation.parentElement.querySelectorAll(".tab__content");

        let activeElementContent = tabNavigation.parentElement.querySelector(".tab__content_active");
        activeElementContent.classList.remove("tab__content_active");
        
        let arrContents = Array.from(contents);

        let activeContent = arrContents[indexTab];
     
        activeContent.classList.add("tab__content_active");
        
    })
}