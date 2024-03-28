const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "1")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 200, "2")
);
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 100, "3"));

const promise4 = new Promise((resolve, reject) =>
  setTimeout(resolve, 5000, "4")
);

const promises = [promise1, promise2, promise3, promise4];

const executePromisesInParallel = (promises) => {
  for (let i = 0; i < promises.length; i++) {
    const promise = promises[i];
    promise
      .then((res) => console.log("Parallel Res:", res))
      .catch((err) => console.log("Parallel Err:", err));
  }
};

executePromisesInParallel(promises);

const promisesInSeries = (promiseList) => {
  const result = [];

  const executePromise = (promise, index = 0) => {
    if (index === promiseList.length) {
      console.log("Result is:", result);
      return;
    }

    promise
      .then((res) => {
        result[i] = res;
        index++;
        executePromise(promiseList[index], index);
      })
      .catch((err) => {
        result[i] = err;
        executePromise(promiseList[index], index);
      });
  };

  executePromise(promiseList[0], 0);
};

promisesInSeries(promiseList);

const executePromisesInSeries = async (promises) => {
  for (let i = 0; i < promises.length; i++) {
    try {
      const response = await promises[i];
      console.log("Series Respose:", response);
    } catch (error) {
      console.log("Series Error:", error);
    }
  }
};

executePromisesInSeries(promises);
