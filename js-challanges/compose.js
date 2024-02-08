// pattern 1
const curryCompose = (f) => (g) => (x) => f(g(x));

const addOne = (x) => x + 1;
const square = (x) => x * x;
const multiply = (x) => x * x;

const composedFunction = curryCompose(square)(addOne)(multiply);
const result = composedFunction(3);
console.log(result);

// Pattern 2
const curryComposeN = (functions) => (x) => {
  if (functions.length === 0) {
    return x;
  }
  const [currentFunction, ...restFunctions] = functions;
  return curryComposeN(restFunctions)(currentFunction(x));
};

const functionsToCompose = [square, addOne, double];
const composedFunction1 = curryComposeN(functionsToCompose);

const result1 = composedFunction1(3);
console.log(result1); // Output: 50 (square(addOne(double(3))))

// Pattern 3
const composeOperations = (...operations) => {
  return (value) => {
    return operations.reduce((acc, operation) => operation(acc), value);
  };
};

const square1 = (x) => x * x;
const increment = (x) => x + 1;
const duplicate = (x) => x * x;

const composedResult = composeOperations(square1, increment, duplicate);
const result2 = composedResult(3);

console.log(result2); // Output: 49 (square(increment(duplicate(3))))
