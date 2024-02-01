const flattenArray = (array, output = []) => {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray(array[i], output);
    } else {
      output.push(array[i]);
    }
  }

  return output;
};

const flattenObject = (obj, data = {}, prefix = "") => {
  for (const key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === "object") {
      flattenObject(obj[key], data, newKey);
    } else {
      data[newKey] = obj[key];
    }
    console.log("KEY:", key, obj[key]);
  }
  console.log("Obj:", data);
};

const obj1 = flattenObject({ a: 1, b: 2, c: 3, d: { e: 4, f: { g: 5 } } }, {});

// output
// {
//     a:1,
//     b:2,
//     c:3,
//     d.e:4,
//     d.f.g:5
// }
// const array1 = flattenArray([1, 2, 3, [5, [6, 7], [[[[[[[8]]]]]]]]]);
// console.log("Array:", array1);
