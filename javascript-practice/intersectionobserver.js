const cardContainer = document.getElementById("card-container");
const cardContainerChildren = cardContainer.children;

const callback = (entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      const divElement = document.createElement("div");
      divElement.textContent = "This is new Card";
      divElement.id = "card";
      cardContainer.append(divElement);
    }
  });
};

const observer = new IntersectionObserver(callback, {
  threshold: 1,
});

observer.observe(cardContainer.lastElementChild);
