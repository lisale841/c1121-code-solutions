/* -check to see if the text has a vowel in it.
   -make all of the text lowercase so that when checking the uppercase will not
   effect it
   - if the text is a vowel we will say it is true
   - if the text is not a vowel we will say it is false. */
/* exported isVowel */
function isVowel(char) {
  var vowel = char.toLowerCase();
  if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    return true;
  }
  return false;
}
