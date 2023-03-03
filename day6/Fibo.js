function* fib(n) {
  let val = (preval = newval = 1);
  yield 1;
  while (newval < n) {
    val = newval;
    yield val;
    newval += preval;
    preval = val;
  }
}

function* fib(n) {
  let val = (preval = newval = 1);
  yield 1;
  for (let i = 1; i < n; i++) {
    val = newval;
    yield val;
    newval += preval;
    preval = val;
  }
}

let values = fib(6);
for (const iterator of values) {
  console.log(iterator);
}
