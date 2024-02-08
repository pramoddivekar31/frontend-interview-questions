const CACHE_TTL = 1000;

const cachedApi = () => {
  const cache = {};

  return async (url) => {
    const cachedKey = cache[url];
    const timePassed = Math.abs(cachedKey?.expiry - Date.now());

    if (cachedKey && timePassed < CACHE_TTL) {
      console.log("From Cache");
      return cache[url]?.promise.then((res) => res.clone());
    } else {
      const response = fetch("https://dummyjson.com/todos/random");
      const promise = response.then((res) => res.clone());
      cache[url] = { promise, expiry: Date.now() };
      console.log("From API Call");
      return promise;
    }
  };
};

const cachedApiCall = cachedApi();

cachedApiCall("https://dummyjson.com/todos/random")
  .then((res) => res.json())
  .then(console.log);

cachedApiCall("https://dummyjson.com/todos/random")
  .then((res) => res.json())
  .then(console.log);

cachedApiCall("https://dummyjson.com/todos/random")
  .then((res) => res.json())
  .then(console.log);

cachedApiCall("https://dummyjson.com/todos/random")
  .then((res) => res.json())
  .then(console.log);

setTimeout(() => {
  cachedApiCall("https://dummyjson.com/todos/random")
    .then((res) => res.json())
    .then(console.log);
}, 5000);
