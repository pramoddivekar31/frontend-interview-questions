// Code 1
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }
  function getInstance() {
    if (!instance) instance = createInstance();

    return instance;
  }

  return { getInstance };
})();

// Code 2

function Singleton() {
  let instance;

  function createInstance() {
    instance = Math.random();
    return instance;
  }

  function getInstance() {
    if (!instance) instance = createInstance();
    return instance;
  }

  return { getInstance };
}

const singletonInstance = new Singleton(); // Create a single instance

export default singletonInstance;

// class

class Singleton {
  static instance = null;

  getInstance() {
    if (!Singleton.instance) Singleton.instance = new Singleton();

    return Singleton.instance;
  }
}
