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
