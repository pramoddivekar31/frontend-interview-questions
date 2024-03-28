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
  name: "Test",
  getFunctionName: function () {
    console.log(this);
  },
  getArrowFunctionName: () => {
    console.log(this);
  },
  updateArrowFunctionScope: function () {
    const innerArrowFunction = () => {
      console.log(this);
    };
    innerArrowFunction();
  },
};

myObject.getFunctionName();
myObject.getArrowFunctionName();
myObject.updateArrowFunctionScope();
