console.log(diamond(process.argv[2]));

function diamond(n){
  if (n % 2 === 0 || n < 0)
    return null;
  var diamArr = [];
  var currIndex = 0;
  // add all rows up to but excluding middle row
  for (var i = 1; i < n; i += 2) {
    // establish the string of asterisks
    diamArr[currIndex] = "*";
    // add the right number of asterisks
    for (var j = 1; j < i; j++) {
      diamArr[currIndex] += "*";
    }
    // add a new line
    diamArr[currIndex] += "\n";
    currIndex++;
  }
  // this will come in handy
  var centerIndex = currIndex;
  // add spaces
  for (var i = 0; i < centerIndex; i++) {
    for (var j = 0; j < centerIndex - i; j++) {
      diamArr[i] = " " + diamArr[i];
    }
  }
  // now add the center row
  diamArr[currIndex] = "*";
  for (var i = 1; i < n; i++) {
    diamArr[currIndex] += "*";
  }
  diamArr[currIndex] += "\n";
  currIndex++;
  // the remaining rows:
  // step back to the row just before middle
  // and start copying
  for (var i = currIndex - 2; i >= 0; i--) {
    diamArr[currIndex] = diamArr[i];
    currIndex++;
  }
  return diamArr.join("");
}