// import Singleton from "./singleton.mjs";
// console.log("Test1:", Singleton.getInstance());

import apiCache from "./cachedapicall.mjs";

const fetchData = async () => {
  const data = await apiCache.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const jsonData = await data.json();

  console.log("TEST1:", jsonData);
};

fetchData();
