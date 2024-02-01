const STATE = {
  FULFILLED: 0,
  PENDING: 1,
  REJECTED: 2,
};

class MyPromise {
  #successHandlers = [];
  #catchHandlers = [];
  #value = null;
  #state = STATE.PENDING;

  constructor(callback) {
    try {
      callback(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (err) {
      this.#reject(err);
    }
  }

  #resolve(value) {
    queueMicrotask(() => {
      if (this.#state === STATE.PENDING) {
        this.#state = STATE.FULFILLED;
        this.#value = value;
        this.#successHandlers.forEach((cb) => cb(this.#value));
      }
    });
  }

  #reject(err) {
    queueMicrotask(() => {
      if (this.#state === STATE.PENDING) {
        this.#state = STATE.REJECTED;
        console.log("Errr:", err);
        this.#value = err;
        console.log("Errr Val:", this.#value);

        this.#catchHandlers.forEach((cb) => cb(this.#value));
      }
    });
  }

  then(successCb) {
    return new MyPromise((res, rej) => {
      if (this.#state === STATE.FULFILLED) {
        try {
          res(successCb(this.#value));
        } catch (err) {
          rej(err);
        }
      } else {
        this.#successHandlers.push((result) => {
          try {
            res(successCb(result));
          } catch (err) {
            rej(err);
          }
        });
      }
    });
  }

  catch(errorCb) {
    return new MyPromise((res, rej) => {
      console.log("state", this.#state);
      console.log("value:", this.#value);
      try {
        res(errorCb(this.#value));
      } catch (err) {
        rej(err);
      }
      // this.#catchHandlers.push((result) => {
      //   try {
      //     res(errorCb(this.#value));
      //   } catch (err) {
      //     rej(err);
      //   }
      // });
    });
  }

  static resolve(value) {
    return new MyPromise((res, rej) => res(value));
  }
}

const promise2 = new MyPromise((res, rej) => rej("Hey...!"));

promise2
  .then((res) => {
    console.log("Promise Res:", res);
    return "Hey... 2";
  })
  .then((res) => {
    console.log("Promise Res: 2", res);
    throw "Error in promise 2";
  })
  .catch((err) => {
    console.log("Promise err:", err);
    return "Catch Err";
  })
  .then((res) => {
    console.log("Promise Res: 3", res);
  });
