/* - create a storage for the word
   - starting from the first letter in the word going thru it one by one until we get to the end of the word
   - after looking at the words  based on the number provided only print out the letters after that number.
   - after that return the new word. */

/* exported lastChars */
function lastChars(length, string) {
  var lastChars = '';
  for (var i = string.length - length; i <= string.length - 1; i++) {

    if (i >= 0) {
      lastChars = lastChars + string[i];
    }

  }
  return lastChars;
}
