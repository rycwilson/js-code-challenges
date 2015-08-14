console.log(titleCase(process.argv[2], process.argv[3]));

function titleCase(title, minorWords) {
  if (title === "" || title === null) return "";
  var titleArr = title.toLowerCase().split(" ");
  if (minorWords === "" || minorWords === null) {
    return titleArr.map(function(word) {
      return word[0].toUpperCase() + word.slice(1, word.length);
    }).join(" ");
  }
  var minorArr = minorWords.toLowerCase().split(" ");
  return titleArr.map(function(word, index) {
    if (index === 0) {
      return word[0].toUpperCase() + word.slice(1, word.length);
    }
    if (minorArr.some(function(wordMinor) {return wordMinor === word;})) {
      return word;
    }
    else {
      return word[0].toUpperCase() + word.slice(1, word.length);
    }
  }).join(" ");
}