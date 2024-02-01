var greet = "Hello";

if (true) {
  var greet = "Hi";
  console.log("Greet1:", greet);
}

console.log("Greet2:", greet);

const obj = {
  value: "I am an object",
  arrowFunc: function () {
    console.log("THIS:", this);
    const test = () => {
      console.log("Arrow function this:", this.value);
    };
    test();
  },
};

obj.arrowFunc();
