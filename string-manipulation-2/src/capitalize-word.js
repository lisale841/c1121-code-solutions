/* - create a storage for the text.
   - make sure to turn all of the letters lowerase
   - make the first letter in the text uppercase and the rest keep it lowercase.
   - if the word is javascript make sure it is spelled with correct capitalization JavaScript
   - after that get the new text with the correct capitalization. */

/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCaseWords = word.toLowerCase();
  var newWord = lowerCaseWords[0].toUpperCase() + lowerCaseWords.slice(1);
  if (lowerCaseWords === 'javascript') {
    return 'JavaScript';
  }
  return newWord;
}
