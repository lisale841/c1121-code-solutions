/* - create a storage for the word
   - starting from the first letter in the word going thru it one by one until we get to the end of the word
   - after looking at the words only print out the letters that we need based on the number provided
   - after that return the new word. */
/* exported firstChars */
function firstChars(length, string) {
  var newWord = '';
  for (var i = 0; i <= length - 1; i++) {
    if (i <= string.length - 1) {
      newWord = newWord + string[i];
    }
  }

  return newWord;
}
