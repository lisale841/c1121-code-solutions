
/* - create a storage for the word
   - make every word lowercase.
   - starting from the first letter in the word going thru it one by one until we get to the end of the word
   - count how many vowels are in the word
   - after getting the number of vowels store it
   - return the number of vowels. */
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
