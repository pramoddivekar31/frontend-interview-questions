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

const executePromisesInSeries2 = (promises) => {
  let currentIndex = 0;

  const executeNextPromise = () => {
    if (currentIndex === promises.length) {
      return;
    }

    promises[currentIndex]
      .then((response) => {
        console.log("Series Response:", response);
        currentIndex++;
        executeNextPromise();
      })
      .catch((error) => {
        console.log("Series Error:", error);
        currentIndex++;
        executeNextPromise();
      });
  };

  executeNextPromise();
};

executePromisesInSeries2(promises);
