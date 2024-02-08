const apiCall = (time) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(time);
    }, time * 1000)
  );

const promise = Promise.all([apiCall(3), apiCall(2), apiCall(1)]);

class CustomPromise {
  constructor() {
    this.race = this.constructor.race;
    this.any = this.constructor.any;
    this.all = this.constructor.all;
    this.allSettled = this.constructor.allSettled;
  }

  static all(promises) {
    let output = [];
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((promiseResult) => {
            output[index] = promiseResult;
            if (promises.length - 1 === index) resolve(output);
          })
          .catch((err) => reject(err));
      });
    });
  }

  static allSettled(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((data) => {
            result[index] = { promise: "fulfilled", data };
          })
          .catch((err) => {
            result[index] = { promise: "rejected", data: err };
          });
      });
      resolve(result);
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => promise.then(resolve).catch(reject));
    });
  }

  static any(promises) {
    let errors = [];
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) =>
        promise.then(resolve).catch((err) => {
          errors[index] = err;
          if (promises.length - 1 === index) reject(errors);
        })
      );
    });
  }
}

const promiseInstance = new CustomPromise();

const promise2 = Promise.any([apiCall(1), apiCall(2), apiCall(3)]);

promise2
  .then((data) => console.log("PROMISE 2:", data))
  .catch((err) => console.log("P2: Err", err));
