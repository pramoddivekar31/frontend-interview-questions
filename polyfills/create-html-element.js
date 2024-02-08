function createHTMLElement(tag, text, attributes, parentElement) {
  // Create a new HTML element
  const newElement = document.createElement(tag);

  // Set the inner text content
  if (text) {
    newElement.textContent = text;
  }

  // Add attributes to the element
  if (attributes) {
    for (const key in attributes) {
      //   if (attributes.hasOwnProperty(key)) {
      newElement.setAttribute(key, attributes[key]);
      //   }
    }
  }

  document.qu

  // Determine the parent element to append to
  if (parentElement) {
    parentElement.appendChild(newElement);
  } else {
    document.body.appendChild(newElement);
  }

  console.log("New Element:", newElement);

  return newElement;
}

// Example usage:
const container = document.getElementById("container"); // Assuming you have an existing element with id 'container'
const html = createHTMLElement(
  "div",
  "This is a dynamically created div",
  { class: "custom-class", id: "dynamic-div" },
  container
);

console.log("HTML:", html);
