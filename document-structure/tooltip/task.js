let tip = document.querySelectorAll(".has-tooltip");

let currentTooltip = null;

let element = document.createElement('div');
element.className = 'tooltip';
document.body.appendChild(element);

for (let i = 0; i < tip.length; i++) {
    let tooltipElement = tip[i];

    let tooltip = tooltipElement.getAttribute("title");

    tooltipElement.addEventListener("click", function (e) {
        e.preventDefault();
        element.innerHTML = tooltip;
        let rect = tooltipElement.getBoundingClientRect();
        element.style.left = rect.left + "px";
        element.style.top = rect.bottom + "px";

        if (currentTooltip != null) {
            element.style.display = "none";
        }

        if (tooltipElement != currentTooltip) {
            element.style.display = "block";
            currentTooltip = tooltipElement;
        } else {
            currentTooltip = null;
        }
    })
}