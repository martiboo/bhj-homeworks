let checkbox = document.querySelectorAll(".interest__check");

for (let i = 0; i < checkbox.length; i++) {
    let elementCheckbox = checkbox[i];
    elementCheckbox.addEventListener("click", function (e) {
        
        let check = elementCheckbox.checked;
        let interestsCheck = elementCheckbox.closest(".interest");
        let newInterstsCheck = interestsCheck.querySelectorAll(".interest__check");
        for (let i = 0; i < newInterstsCheck.length; i++) {
            let elementInterest = newInterstsCheck[i];
            elementInterest.checked = check;
        }
    }
    )
}