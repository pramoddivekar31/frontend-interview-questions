// Angel One
const maxConcurrentTasks = 3;

const parallelTaskRunner = () => {
  const promiseList = [];
  let runningPromises = 0;

  const executePromises = (promises) => {
    if (runningPromises < maxConcurrentTasks && promises.length) {
      const promiseFn = promises.shift();
      runningPromises++;

      promiseFn().then(() => {
        runningPromises--;
        executePromises(promiseList);
      });
    }
  };

  return (promiseFn) => {
    promiseList.push(promiseFn);
    executePromises(promiseList);
  };
};

const executePromises = parallelTaskRunner();

executePromises(
  () => new Promise((resolve) => setTimeout(() => resolve(1), 1000))
);
executePromises(
  () => new Promise((resolve) => setTimeout(() => resolve(2), 3000))
);
executePromises(
  () => new Promise((resolve) => setTimeout(() => resolve(3), 2000))
);
executePromises(
  () => new Promise((resolve) => setTimeout(() => resolve(4), 500))
);
executePromises(
  () => new Promise((resolve) => setTimeout(() => resolve(5), 1500))
);

// Output: 1, 4, 3, 2, 5;
