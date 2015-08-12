// don't want to use process.argv, because we're doing some type-checking,
// and process.argv only contains strings
// var result = comparator(process.argv[2], process.argv[3]);

console.log(comparator(4, 5));
console.log(comparator(5,4));
console.log(comparator("foo", "bar"));
console.log(comparator("foo", "foo"));
console.log(comparator("foo", 5));

function comparator (a, b) {
  // integer
  if ( a % 1 === 0 && b % 1 === 0) {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }
  else if (typeof a === "string" && typeof b === "string") {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }
  else throw "Floating-point numbers or mismatched types: " + "a: " + typeof a + ", b: " + typeof b;
}