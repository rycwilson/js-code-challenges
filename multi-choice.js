
/*
  Given an array of data, randomly select <choiceCount> number of items
  for quiz-style multiple-choice
  The correctChoice parameter comes from data
*/

function getMultipleChoices(data, correctChoice, choiceCount) {

  var min = 0;
  var max = data.length - 1;
  var choices = [];

  while (choices.length < choiceCount) {
    choices.push(correctChoice); // start by putting the correct answer in the array
    // start on 1 because there's already one item (correct answer) in the array
    for (var i = 1; i < choiceCount; i++) {
      var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
      choices.push(data[randNum].name);
    }
    choices = _.uniq(choices);
  }
  return _.shuffle(choices);  // ensures correct answer is randomly placed
}