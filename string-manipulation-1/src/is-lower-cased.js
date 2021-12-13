/* - check to see if a word is lowercase
   - if it is lowercase then we will say it is true
   -if it is not lowercase we will say it is false. */
/* exported isLowerCased */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
