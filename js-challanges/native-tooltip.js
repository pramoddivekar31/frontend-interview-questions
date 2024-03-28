document.addEventListener("DOMContentLoaded", function () {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  tooltips.forEach((tooltip) => {
    console.log("Tooltop:", tooltip);
    const text = tooltip.getAttribute("data-tooltip");
    const tooltipElement = document.createElement("span");

    // styles
    tooltipElement.textContent = text;
    tooltipElement.classList.add("tooltip-text"); // Adding the tooltip-text class
    tooltipElement.style.visibility = "hidden";
    tooltipElement.style.width = "120px";
    tooltipElement.style.backgroundColor = "black";
    tooltipElement.style.color = "white";
    tooltipElement.style.textAlign = "center";
    tooltipElement.style.borderRadius = "6px";
    tooltipElement.style.padding = "5px";
    tooltipElement.style.position = "absolute";
    tooltipElement.style.zIndex = "1";
    tooltipElement.style.bottom = "125%";
    tooltipElement.style.left = "50%";
    tooltipElement.style.transform = "translateX(-50%)";
    tooltip.appendChild(tooltipElement);

    // Show tooltip on hover
    tooltip.addEventListener("mouseenter", function () {
      tooltipElement.style.visibility = "visible";
    });

    // Hide tooltip on mouse leave
    tooltip.addEventListener("mouseleave", function () {
      tooltipElement.style.visibility = "hidden";
    });
  });
});
