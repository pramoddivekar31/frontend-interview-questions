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
