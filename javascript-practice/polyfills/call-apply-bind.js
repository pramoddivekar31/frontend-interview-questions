const obj = {
  name: "Pramod",
  getName: function (lastName) {
    console.log("Name is: " + this.name + " " + lastName);
  },
};

const obj2 = {
  name: "Heyy, ",
};

// Call polyfill
obj.getName();
obj.getName.call(obj2, "Call Divekar");

Object.prototype.myCall = function (context, ...args) {
  context.thisFunc = this;
  context.thisFunc(...args);
  delete context.thisFunc; // Clean up by removing the temporary property
};

obj.getName.myCall(obj2, "My Call Divekar");

// apply polyfill
obj.getName.apply(obj2, ["Apply Divekar"]);

Object.prototype.myApply = function (context, args) {
  context.thisFunc = this;
  context.thisFunc(...args);
  delete context.thisFunc;
};

obj.getName.myApply(obj2, ["My Apply Divekar"]);

// bind polyfill
const bindFunc = obj.getName.bind(obj2);
bindFunc("Bind Divekar");

Object.prototype.myBind = function (context) {
  return (...args) => {
    context.thisFunc = this;
    context.thisFunc(args);
  };
};

const bindFunc1 = obj.getName.myBind(obj2);
bindFunc1("My Bind Divekar");
