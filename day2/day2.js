function Shape(_width, _height) {
  var width = _width || 1;
  var height = _height || 1;
  Object.defineProperties(this, {
    width: {
      get: function () {
        return width;
      },
      set: function (value) {
        width = value;
      },
    },
    height: {
      get: function () {
        return height;
      },
      set: function (value) {
        height = value;
      },
    },
  });
}
Shape.prototype.calArea = function () {
  return this.height * this.width;
};

Shape.prototype.calPerimeter = function () {
  return (this.height + this.width) * 2;
};

Shape.prototype.toString = function () {
  console.log("width:", this.width);
  console.log("height:", this.height);
  console.log("Area:", this.calArea());
  console.log("Perimeter:", this.calPerimeter());
};

function Rectangle(_width, _height) {
  Rectangle.counter = 0;
  Rectangle.counter++;
  Shape.call(this, _width, _height);
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.getCounter = function () {
  return Rectangle.counter;
};
Rectangle.prototype.Display = function () {
  console.log("width:", this.width);
  console.log("height:", this.height);
  console.log("Area:", this.calArea());
  console.log("Perimeter:", this.calPerimeter());
};

var R = new Rectangle(2, 3);
var S = new Shape();

R.toString();
console.log(S);

console.log(R);
//console.log(S.Display());

console.log(Rectangle.getCounter());
//p.toString();
