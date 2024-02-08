function square(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result++;
    }
  }
  return result;
}

const memoize = (callbackFn) => {
  const map = new Map();

  return (value) => {
    if (map.has(value)) {
      console.log("From Cache");
      return map.get(value);
    } else {
      const result = callbackFn(value);
      console.log("From Function");
      map.set(value, result);
    }
  };
};

const memoizedSquare = memoize(square);
console.log(memoizedSquare(140));
console.log(memoizedSquare(140));
