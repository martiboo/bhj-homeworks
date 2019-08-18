let tip = document.querySelectorAll(".has-tooltip");

let currentTooltip = null;

for (let i = 0; i < tip.length; i++) {
    let tooltipElement = tip[i];

    let tooltip = tooltipElement.getAttribute("title");
    let rect = tooltipElement.getBoundingClientRect();

    let element = document.createElement('div');
    element.className = 'tooltip';
    element.style.left = rect.left + "px";
    element.style.top = rect.bottom + "px";
    element.innerHTML = tooltip;
    tooltipElement.appendChild(element);
    
    tooltipElement.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(currentTooltip);

        if (currentTooltip != null) {
            currentTooltip.style.display = "none";
        }

        if (element != currentTooltip) {
            element.style.display = "block";
            currentTooltip = element;
        } else {
            currentTooltip = null;
        }
    })
}