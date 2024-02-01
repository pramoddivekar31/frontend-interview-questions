const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

class CustomPromise {
  #value = null;
  #successHandlers = [];
  #errorHandlers = [];
  #state = PENDING;

  constructor(executor) {
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (err) {
      this.#reject(err);
    }
  }

  #runCallbacks() {
    if (this.#state === FULFILLED) {
      this.#successHandlers.forEach((cb) => cb(this.#value));
      this.#successHandlers = [];
    }

    if (this.#state === REJECTED) {
      this.#errorHandlers.forEach((cb) => cb(this.#value));
      this.#errorHandlers = [];
    }
  }

  #resolve(value) {
    if (this.#state === PENDING) {
      this.#state = FULFILLED;
      this.#value = value;
      this.#runCallbacks();
    }
  }

  #reject(error) {
    if (this.#state === PENDING) {
      this.#state = REJECTED;
      this.#value = error;
      this.#runCallbacks();
    }
  }

  then(thenCb, catchCb) {
    return new CustomPromise((resolve, reject) => {
      this.#successHandlers.push((result) => {
        if (thenCb == null) {
          resolve(result);
          return;
        }

        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#errorHandlers.push((catchValue) => {
        if (catchCb == null) {
          reject(catchValue);
          return;
        }

        try {
          resolve(catchCb(catchValue));
        } catch (error) {
          reject(error);
        }
      });

      console.log("this succ:", this.#successHandlers.length);
      console.log("this err:", this.#errorHandlers.length);

      this.#runCallbacks();
    });
  }

  catch(cb) {
    return this.then(undefined, cb);
  }
}

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected");
  }, 1000);
});

promise
  .then((result) => {
    console.log("Step 1:", result);
    return 10;
  })
  .then((result) => {
    console.log("Step 2:", result);
    throw new Error("Error in Step 2");
  })
  .catch((error) => {
    console.log("Error Handler:", error);
    return 20;
  })
  .then((result) => {
    console.log("Step 3:", result);
    throw new Error("Error in Step 3");
  })
  .catch((error) => {
    console.log("Error Handler2:", error);
  });
