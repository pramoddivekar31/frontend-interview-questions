const circutBreaker = (apiCall, cbLimit, cbThreshold) => {
  let failures = 0;
  let lastFailure;

  return (...args) => {
    const diff = Date.now() - lastFailure;

    if (diff > cbThreshold) console.error("Service Unavailable");

    try {
      apiCall(args);
    } catch (err) {
      failures++;
      lastFailure = Date.now();
    } finally {
      if (failures >= cbLimit) {
        console.log("Error From Service");
      }
    }
  };
};

const apiCall = () => {
  let count = 0;
  return () => {
    if (count > 2) {
      throw "error";
    }
    count++;
    return "Hellow";
  };
};

const api = apiCall();
const c = circutBreaker(api, 3, 200);

c();
c();
c();
c();
c();
c();
c();
