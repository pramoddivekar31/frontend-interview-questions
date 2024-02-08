// Angel One
const maxConcurrentTasks = 3;

const taskRunner = () => {
  const promiseQueue = [];
  let runningPromises = 1;

  const executePromise = () => {
    if (promiseQueue.length === 0 || runningPromises > maxConcurrentTasks) {
      return;
    }

    const promise = promiseQueue.shift();
    runningPromises++;
    promise().then((res) => {
      console.log("Response:", res);
      runningPromises--;
      executePromise();
    });
  };

  return (promiseFn) => {
    promiseQueue.push(promiseFn);

    executePromise();
  };
};

const executePromises = taskRunner();

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
