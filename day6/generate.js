let arr = ["amal", 24, "Riham", 25];
arr[Symbol.iterator] = display;

function display() {
  i = 0;
  return {
    next: function () {
      i++;
      if (i <= arr.length) {
        return {
          value: arr[i - 1],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}

for (const iterator of arr) {
  console.log(iterator);
}

/////////////////////////object
let person = {
  fname: "amal",
  lname: "mohamed",
};
person[Symbol.iterator] = display;

function* display() {
  for (const key in this) {
    yield `[${key}:${this[key]}]`;
  }
}

function display() {
  let objectAsarr = Object.entries(this);
  i = 0;
  return {
    next: function () {
      i++;
      if (i <= objectAsarr.length) {
        return {
          value: `[${objectAsarr[i - 1]} ]`,
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}
for (const iterator of person) {
  console.log(iterator);
}

/////////modules
import { Rectangle, Square, Circle, Shape } from "./shapeclass.js";
var obj1 = new Rectangle(2, 3);
var obj2 = new Circle(4);
var obj3 = new Square(6);
obj1.toString();
obj2.toString();
obj3.toString();
