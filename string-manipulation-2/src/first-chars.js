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
