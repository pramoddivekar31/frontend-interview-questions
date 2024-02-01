class Stream {
  constructor() {
    this.subscribers = new Set();
    this.value = undefined;
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    if (this.value !== undefined) {
      callback(this.value);
    }
  }

  push(value) {
    this.value = value;
    this.subscribers.forEach((subscriber) => {
      subscriber(value);
    });
  }

  unsubscribe(callback) {
    this.subscribers.delete(callback);
  }
}

const z = new Stream();

z.push(2);

const subscriber1 = (val) => console.log("test1", val);
const subscriber2 = (val) => console.log("test2", val * 2);
const subscriber3 = (val) => console.log("test3", val * 3);

z.subscribe(subscriber1);
z.subscribe(subscriber2);
z.subscribe(subscriber3);

z.unsubscribe(subscriber2); // Unsubscribe one of the subscribers

z.push(5); // Push a new value

z.subscribe((val) => console.log("test4", val * 4));


stream.push("test 1");
stream.push("test 2");
stream.push("test 3");
stream.push("test 4");
stream.push("test 5");


setTimeout(() => stream.subscribe(), 1000)

