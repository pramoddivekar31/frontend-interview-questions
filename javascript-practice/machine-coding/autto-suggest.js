const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestions");

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Japan",
  "China",
  // Add more countries here
];

searchInput.addEventListener("input", () => {
  const inputValue = searchInput.value.toLowerCase();
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(inputValue)
  );
  displaySuggestions(filteredCountries);
});

function displaySuggestions(suggestions) {
  suggestionsList.innerHTML = "";
  suggestions.forEach((suggestion) => {
    const listItem = document.createElement("li");
    listItem.textContent = suggestion;
    listItem.addEventListener("click", () => {
      searchInput.value = suggestion;
      suggestionsList.style.display = "none";
    });
    suggestionsList.appendChild(listItem);
  });

//   if (suggestions.length > 0) {
//     suggestionsList.style.display = "block";
//   } else {
//     suggestionsList.style.display = "none";
//   }
}

document.addEventListener("click", (event) => {
  if (event.target !== suggestionsList && event.target !== searchInput) {
    suggestionsList.style.display = "none";
  }
});
