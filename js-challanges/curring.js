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

function sum1(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Usage
const result = sum1(1)(2)(3);
console.log(result); // Output: 6

// Example: Implement a curried function that dynamically accepts any number of arguments.
function dynamicCurry(fn, ...args) {
  if (args.length === fn.length) {
    return fn(...args);
  } else {
    return (...nextArgs) => dynamicCurry(fn, ...args, ...nextArgs);
  }
}

const add = (a, b, c) => a + b + c;
const multiply = (a, b, c) => a * b * c;

const curriedAdd = dynamicCurry(add);
const curriedMultiply = dynamicCurry(multiply);

const result1 = curriedAdd(1)(2)(3);
const result2 = curriedMultiply(2)(3)(4);

console.log(result1); // Output: 6
console.log(result2); // Output: 24
