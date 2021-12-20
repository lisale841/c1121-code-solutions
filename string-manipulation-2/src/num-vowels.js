/* exported numVowels */
function numVowels(string) {
  var lowerCase = string.toLowerCase();
  var vowels = '';
  for (var i = 0; i <= string.length - 1; i++) {
    if (lowerCase[i] === 'a' || lowerCase[i] === 'e' || lowerCase[i] === 'i' || lowerCase[i] === 'o' ||
      lowerCase[i] === 'u') {
      vowels = vowels + lowerCase[i];
    }
  }
  var totalVowels = vowels.length;
  return totalVowels;
}
