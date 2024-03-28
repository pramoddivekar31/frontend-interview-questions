function parentFunction() {
  try {
    const data = someMiddleFunction1();
    console.log("Parent :", data);
  } catch (error) {
    console.log("Error caught in parentFunction:", error.message);
  }
}

const someMiddleFunction = () => {
  const data = "some random data";
  childFunction();
};

const someMiddleFunction1 = () => {
  const data = "some random data";
  someMiddleFunction();
};

function childFunction() {
  throw new Error("I AM Bad Chiild");
  //   try {
  //     // Simulating an error
  //     throw new Error("Error in childFunction");
  //   } catch (error) {
  //     console.log("Error caught in childFunction:", error.message);
  //     // Returning from catch block
  //     throw error; // This will exit childFunction
  //   }
}

parentFunction();
