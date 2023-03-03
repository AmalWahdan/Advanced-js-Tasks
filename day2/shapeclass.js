/////////////class

class Shape {
  #dimention1;
  constructor(dimention) {
    this.#dimention1 = dimention;
  }
  get getD1() {
    return this.#dimention1;
  }
  set setD1(value) {
    this.#dimention1 = value;
  }
}
////////////Circle
class Circle extends Shape {
  constructor(radius) {
    super(radius);
  }
  calArea() {
    return this.getD1 * this.getD1 * 3.14;
  }

  calPerimeter() {
    return this.getD1 * 2 * 3.14;
  }

  toString() {
    console.log("radius:", this.getD1);
    console.log("Area:", this.calArea());
    console.log("Perimeter:", this.calPerimeter());
  }
}
///////////Square
class Square extends Shape {
  constructor(width) {
    super(width);
  }
  calArea() {
    return this.getD1 * this.getD1;
  }

  calPerimeter() {
    return this.getD1 * 4;
  }

  toString() {
    console.log("width:", this.getD1);
    console.log("height:", this.getD1);
    console.log("Area:", this.calArea());
    console.log("Perimeter:", this.calPerimeter());
  }
}
//////////Rect
class Rectangle extends Shape {
  #dimention2;
  static count = 0;
  constructor(width, height) {
    super(width);
    this.#dimention2 = height;
    Rectangle.count++;
  }

  get getD2() {
    return this.#dimention2;
  }

  set setD2(value) {
    this.#dimention2 = value;
  }

  static getCount() {
    return Rectangle.count;
  }

  calArea() {
    return this.getD1 * this.getD2;
  }

  calPerimeter() {
    return (this.getD1 + this.getD2) * 2;
  }

  toString() {
    console.log("width:", this.getD1);
    console.log("height:", this.getD2);
    console.log("Area:", this.calArea());
    console.log("Perimeter:", this.calPerimeter());
  }
}
var obj1 = new Rectangle(2, 3);
var obj2 = new Circle(4);
var obj3 = new Square(6);
obj1.toString();
obj2.toString();
obj3.toString();
