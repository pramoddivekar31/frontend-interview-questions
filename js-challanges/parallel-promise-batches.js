const sleepFn = (time) => new Promise((res) => setTimeout(res, time, time));

const functionsList = [
  () => sleepFn(2000),
  () => sleepFn(1000),
  () => sleepFn(3000),
  () => sleepFn(1500),
  () => sleepFn(1000),
];

const executePromiseInBatches = (promiseList, batchLimit) => {
  let count = 0;
  let promiseResult = [];

  return new Promise((resolve, reject) => {
    const promiseCallback = (res) => {
      promiseResult.push(res);
      count++;

      // Check if all promises are resolved
      if (promiseList.length === promiseResult.length) {
        resolve(promiseResult);
      }
      if (count % batchLimit === 0) {
        executePromise(promiseList.slice(count, count + batchLimit));
      }
    };

    const executePromise = (promises) => {
      promises.forEach((promise) => {
        promise().then(promiseCallback).catch(reject);
      });
    };

    executePromise(promiseList.slice(0, batchLimit));
  });
};

// Use async/await to handle the result
(async () => {
  try {
    const result = await executePromiseInBatches(functionsList, 2);
    console.log("Result:", result);
  } catch (err) {
    console.log("Error:", err);
  }
})();
