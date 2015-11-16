/*
  "Memoized" solution to Fibonacci sequence calculation.
  Sequence values are stored in a cache and referenced instead of
  being repeatedly calculated
  Closure function is used to create effective private scope
*/
var fibonacci = (function () {

  var fib_cache = {};

  return function(n) {
    if (fib_cache[n])
      return fib_cache[n];
    if (n < 2)
      fib_cache[n] = n;
    else
      fib_cache[n] = fibonacci(n-1) + fibonacci(n-2);
    return fib_cache[n];
  };

}());