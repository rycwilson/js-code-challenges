isPalindrome(process.argv[2]);

function isPalindrome(word) {

  // Challenge: only one pass, no built-in methods
  var i = 0;
  var j = word.length - 1;
  var palindrome = true;

  // watch out for infinite loops!  don't use while (i !== j)
  while (i < j) {
    while (word[i] === " ") i++;
    while (word[j] === " ") j--;
    if (word[i] !== word[j]) {
      palindrome = false;
      break;
    }
    i++;
    j--;
  }
  if (palindrome) {
    console.log('palindrome!');
  }
  else console.log('no palindrome');

////
  // USING REGEXP
  // word = word.replace(/\s/g, "");
  // var wordRev = word.split("").reverse().join("").replace(/\s/g, "");
  // if (wordRev === word) {
  //   console.log('palindrome!');
  // }
  // else console.log('no palindrome');
////

////
  // TWO ARRAYS
  // var wordRevArr = word.split("").reverse();
  // var wordArr = word.split("");

  // // strip spaces
  // for (var i = 0; i < wordRevArr.length; i++) {
  //   if (wordRevArr[i] === " ") {
  //     wordRevArr.splice(i,1);
  //   }
  // }
  // for (var i = 0; i < wordArr.length; i++) {
  //   if (wordArr[i] === " ") {
  //     wordArr.splice(i,1);
  //   }
  // }

  // join arrays and compare
  // var wordRev = wordRevArr.join("");
  // word = wordArr.join("");

  // if (wordRev === word) {
  //   console.log('palindrome!');
  // }
  // else console.log('no palindrome');
////

}
