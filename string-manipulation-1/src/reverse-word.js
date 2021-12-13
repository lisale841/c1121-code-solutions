/* exported reverseWord */
/* - create a storage to store the new word.
   - for each character in the word starting from the last character one by one we keep noting/adding it until we reach
   the first character in the word.
   - after noting / adding the characters we will get the result of the new word. */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word[i];
  }
  return newWord;
}
