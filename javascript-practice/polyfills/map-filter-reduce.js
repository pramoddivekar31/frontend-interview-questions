// map polyfill
const list = [1, 2, 3, 4, 5];

const updatedList = list.map((x) => x * 2);
console.log("map list:", updatedList);

Array.prototype.myMap = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray[i] = cb(this[i]);
  }
  return newArray;
};

const updatedList1 = list.myMap((x) => x * 2);
console.log("updated map list:", updatedList1);

// filter polyfill
const filteredList = list.filter((i) => i % 2 === 0);
console.log("Filter list:", filteredList);

Array.prototype.myFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) newArray.push(this[i]);
  }
  return newArray;
};

const filteredList1 = list.myFilter((i) => i % 2 === 0);
console.log("updated filter list:", filteredList1);

// reduce polyfill
const sum = list.reduce((acc, ele) => acc * ele);
console.log("Multiply:", sum);

Array.prototype.myReduce = function (cb, acc) {
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
};

const sum1 = list.myReduce((acc, ele) => acc * ele, 1);
console.log("updated Multiply:", sum1);
