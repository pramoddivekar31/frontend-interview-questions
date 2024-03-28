class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square {
  constructor(side) {
    super(side, side);
  }

  area() {
    return this.height * this.width;
  }
}

const square = new Square(4);

console.log("Area Is:", square.area());

function Polygon(height, width) {
  this.height = height;
  this.width = width;
}

function Square(sideLength) {
  this.self = Polygon;
  this.self(sideLength, sideLength);

  this.area = function () {
    return this.height * this.width;
  };
  
  this.setLength = function (len) {
    this.height = len;
    this.width = len;
  };
}

Square.prototype = new Polygon();

const square2 = new Square(2);
