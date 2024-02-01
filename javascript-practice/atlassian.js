function Manager(size, name) {
  this.size = size;
  this.name = name;
}

var describeSelf = function () {
  console.log("THIS: ", this);
  if (this) {
    console.log("Manager is " + this.name + " " + this.size);
  }
};

const m1 = new Manager(4, "A");
const m2 = new Manager(5, "B");
const m3 = new Manager(6, "C");

describeSelf(m1);

describeSelf.call(m2, m3);
