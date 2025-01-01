function foo(a, b = 0) {  return a + b;}
console.log(foo(2, 3)); // outputs 5
console.log(foo(2));    // outputs 2