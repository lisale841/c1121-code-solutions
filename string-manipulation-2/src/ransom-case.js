/* - create a storage for the word
   - make every word lowercase.
   - starting from the first letter in the word going thru it one by one until we get to the end of the word
   - make every other word uppercase
   - after getting the new word with the correct capitalization
   - return the word. */

/* exported ransomCase */
function ransomCase(string) {
  var lowerCase = string.toLowerCase();
  var newWord = '';

  for (var i = 0; i <= string.length - 1; i++) {

    if (i % 2 === 0) {
      newWord = newWord + lowerCase[i];

    } else {
      newWord = newWord + lowerCase[i].toUpperCase();

    }
  }
  return newWord;
}
