//////////1
var [x, y] = [1, 2];
console.log(`x: ${x}  y: ${y}`);
var [x, y] = [y, x];
console.log(`x: ${x}  y: ${y}`);
/////2

let Max = () => [Math.max(...[1, 4, 6, 4]), Math.min(...[1, 4, 6, 4])];
console.log(...Max());

/////3
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let result = fruits.every((item) => typeof item == "string");

console.log(result);

result = fruits.some((item) => item.startsWith("a")
);
console.log(result);

result = fruits.filter((item) => item.startsWith("b") || item.startsWith("s"));
console.log(result);

result = fruits.map((item) => `I like ${item} `);
console.log(result);

fruits.forEach((item, index) => {
  console.log(`item number ${index} equal ${item}`);
});
