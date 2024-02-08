const outer = () => {
  const cache = { a: 10 };

  const sum = () => 10;

  class NoChange {
    constructor() {
      this.data = "Pramod";
    }
  }

  return function inner() {
    console.log(cache, sum()), new NoChange();
  };
};

const cachedFn = outer();

cachedFn();
