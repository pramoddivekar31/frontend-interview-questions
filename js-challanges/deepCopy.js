function deepCopy(obj) {
  const deepCopyR = (someObj, newObject) => {
    for (let key in someObj) {
      const value = someObj[key];
      if (typeof value === "object") {
        newObject[key] = { ...value };
        deepCopyR(value, newObject[key]);
      } else {
        // newObject[key] = value;
      }
    }
    return newObject;
  };

  return deepCopyR(obj, {}); // Pass newObj as parameter
}

const originalObj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
  e: {
    f: {
      g: { h: 2 },
    },
  },
};

const cloned = deepCopy(originalObj);

cloned.a.b.c.d = 5;

console.log("Cloned:", cloned);
console.log("Original after cloning:", originalObj);
