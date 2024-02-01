const curry = (...a) => {
  return (...args) => {
    if (args.length)
      return curry(
        a.reduce((c, a) => c + a, 0) + args.reduce((acc, curr) => acc + curr, 0)
      );

    return a;
  };
};

let sum = curry(1, 2)(2, 5)(5, 2, 3);
console.log("CURRY SUM", sum());
