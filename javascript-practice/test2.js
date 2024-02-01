// import Singleton from "./singleton.mjs";

// console.log("Test2:", Singleton.getInstance());

import apiCache from "./cachedapicall.mjs";

const fetchData = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const cachedData = await apiCache.get(url);

  if (cachedData) {
    const jsonData = await cachedData.json();
    console.log("TEST2:", jsonData);
  } else {
    console.log("Data not found in cache");
  }
};

setTimeout(() => {
  fetchData();
}, 2000);
