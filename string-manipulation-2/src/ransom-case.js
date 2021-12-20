/* every other word is uppercase */

/* exported ransomCase */
/* every other word is uppercase */

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

ransomCase('foO');
