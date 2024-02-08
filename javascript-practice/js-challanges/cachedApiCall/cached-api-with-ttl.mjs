const cachedApiCall = () => {
  const cache = {};

  return async (url, config = {}) => {
    const key = `${url}${JSON.stringify(config)}`;

    const entry = cache[key];

    if (!entry || Date.now() - entry.expiry > 10000) {
      console.log("Making a fresh api call");

      try {
        let resp = fetch(url);
        cache[key] = { value: resp, expiry: Date.now() };
        return resp;
      } catch (e) {
        console.log("error while making api call", e);
      }
    }

    console.log("From Cache");
    return Promise.resolve(cache[key].value);
  };
};

const cachedAPI = cachedApiCall();

const fetchData = async (num) => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  cachedAPI(url)
    .then((t) => t.clone().json())
    .then((data) => console.log("Cache1:", data));

  // const jsonData = await cachedData.json();
  // console.log(`TEST ${num}`, cachedData);
};

const fetchData2 = async (num) => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  cachedAPI(url)
    .then((t) => t.clone().json())
    .then((data) => console.log("Cache2:", data));

  // const jsonData = await cachedData.json();
  // console.log(`TEST ${num}`, cachedData);
};

fetchData(1);
fetchData2(2);
