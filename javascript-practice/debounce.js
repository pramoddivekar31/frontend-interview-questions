const debounce = (api, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      api(...args);
    }, delay);
  };
};

const apiCall = (filterQuery) => {
  console.log("API Call " + filterQuery);
};

const debounceAPICall = debounce(apiCall, 1000);

const searchInput = document.getElementById("search");

searchInput.onkeydown = (eve) => {
  const filterQuery = eve.target.value;
  debounceAPICall(filterQuery);
};
