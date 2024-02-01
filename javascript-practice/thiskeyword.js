// Global scope
console.log(this); // Window

// Function declaration
function regularFunction() {
  console.log(this); // Window
}

regularFunction();

// Arrow function
const arrowFunction = () => {
  console.log(this); // Window
};

arrowFunction();

// Function declaration and arrow function in an object
const myObject = {
  name: "Pramod",
  getFunctionName: function () {
    console.log(this); // myObject
  },
  getArrowFunctionName: () => {
    console.log(this); // Window
  },
  updateArrowFunctionScope: function () {
    const innerArrowFunction = () => {
      console.log(this); // myObject
    };
    innerArrowFunction();
  },
};

myObject.getFunctionName(); // myObject
myObject.getArrowFunctionName(); // Window
myObject.updateArrowFunctionScope(); // myObject
