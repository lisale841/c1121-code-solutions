/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCaseWords = word.toLowerCase();
  var newWord = lowerCaseWords[0].toUpperCase() + lowerCaseWords.slice(1);
  if (lowerCaseWords === 'javascript') {
    return 'JavaScript';
  }
  return newWord;
}
