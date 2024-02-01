function runOnce() {
  let run = true;
  return () => {
    if (run) {
      run = false;
      console.log("Function is running");
    } else {
      console.log("Already Runn");
    }
  };
}

const onceFunc = runOnce();

onceFunc();
onceFunc();
onceFunc();
