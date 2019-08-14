let tip = document.querySelectorAll(".has-tooltip");


let currentTooltip = null;

for (let i = 0; i < tip.length; i++) {
    let tooltipElement = tip[i];

    let tooltip = tooltipElement.getAttribute("title");
    let rect = tooltipElement.getBoundingClientRect();
    console.log(rect);


    let element = document.createElement('div');
    element.className = 'tooltip';
    element.style.left = 0;
    element.style.top = 0;
    element.innerHTML = tooltip;
    document.body.appendChild(element);

    tooltipElement.addEventListener("click", function (e) {
        e.preventDefault();

        if (currentTooltip != null) {
            currentTooltip.style.display = "none";
        }


        element.style.display = "block";

        currentTooltip = element;
    })
}