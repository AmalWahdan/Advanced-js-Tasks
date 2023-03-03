function two_args() {
  if (arguments.length != 2) {
    throw "the number of arguments must be 2";
  }
}
//two_args(1);

function add_n_numbers() {
  if (arguments.length == 0) {
    throw "there is no arguments to add ";
  } else {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      if (isNaN(arguments[i])) {
        throw "the argument  [" + arguments[i] + "] is not a number ";
      } else {
        sum += parseInt(arguments[i]);
      }
    }
    document.writeln(sum);
  }
}
//add_n_numbers(1, 2, 3);
//add_n_numbers(1, "amal", 3);
//add_n_numbers();

function show(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    document.writeln(inputs[i]);
  }
}

function reverse1() {
  show(arguments);
  show(Array.from(arguments).reverse());
}
//reverse1(1, 2, 3);

function reverse2() {
  var arr = [];
  for (var j = arguments.length - 1; j >= 0; j--) {
    arr.push(arguments[j]);
  }
  show(arr);
}
reverse2(5, 6, 7);
