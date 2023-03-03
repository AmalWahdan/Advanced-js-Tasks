function Shape(_dimension) {
  var dimension = _dimension || 1;
  Object.defineProperty(this, "dimension1", {
    get: function () {
      return dimension;
    },
    set: function (value) {
      dimension = value;
    },
  });
}

Shape.prototype.calArea = function () {
  return 1;
};

Shape.prototype.calPerimeter = function () {
  return 1;
};
////////Square
function Square(dimension) {
  Shape.call(this, dimension);
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.calArea = function () {
  return this.dimension1 * this.dimension1;
};

Square.prototype.calPerimeter = function () {
  return this.dimension1 * 4;
};
Square.prototype.toString = function () {
  console.log("radius:", this.dimension1);
  console.log("Area:", this.calArea());
  console.log("Perimeter:", this.calPerimeter());
};
////////Circle
function Circle(radius) {
  Shape.call(this, radius);
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.calArea = function () {
  return 3.14 * this.dimension1 * this.dimension1;
};

Circle.prototype.calPerimeter = function () {
  return 2 * 3.14 * this.dimension1;
};
Circle.prototype.toString = function () {
  console.log("width:", this.dimension1);
  console.log("height:", this.dimension1);
  console.log("Area:", this.calArea());
  console.log("Perimeter:", this.calPerimeter());
};
///////Rectangle
function Rectangle(_dimension1, _dimension2) {
  Rectangle.counter = 0;
  Rectangle.counter++;
  var dimension2 = _dimension2 || 1;
  Object.defineProperty(this, "dimension2", {
    get: function () {
      return dimension2;
    },
    set: function (value) {
      dimension2 = value;
    },
  });
  Shape.call(this, _dimension1);
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.calArea = function () {
  return this.dimension1 * this.dimension2;
};

Rectangle.prototype.calPerimeter = function () {
  return (this.dimension1 + this.dimension2) * 2;
};

Rectangle.getCounter = function () {
  return Rectangle.counter;
};

Circle.prototype.toString = function () {
  console.log("width:", this.dimension1);
  console.log("height:", this.dimension2);
  console.log("Area:", this.calArea());
  console.log("Perimeter:", this.calPerimeter());
};

var s = new Shape(5);
var R = new Rectangle(2, 3);
var C = new Circle(7);
var Sq = new Square(4);
console.log(R);
console.log(s);
console.log(C);
console.log(Sq);
