let person = {
  name: "Amal",
  address: "Banha",
  age: 24,
};

let handler = {
  get: function (target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw `${prop} not found`;
    }
  },
  set: function (target, prop, value) {
    if (prop == "name" && !/[a-z A-Z]{7}/.test(value)) {
      throw "Name not match name pattern";
    } else if (prop == "address" && typeof value != "string") {
      throw "Address must be string";
    } else if (prop == "age" && (value < 25 || value > 60 || isNaN(value))) {
      throw " age must be number between 25 and 60 ";
    } else {
      target[prop] = value;
    }
  },
};

let myProxy = new Proxy(person, handler);
myProxy.age = 25;
myProxy.name = "Amallll";
myProxy.address = "";
console.log(myProxy.name);
