
function pyramid(n) {

  var myString = "";

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n - i; j++)  {
      myString += " ";
    }
    for (var k = 1; k <= i; k++) {
      myString += "* ";
    }
    console.log(myString);
    myString = "";
  }

}