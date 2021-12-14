/* exported isUpperCased */
/*
/* - check to see if a word is uppercase
   - if it is uppercase then we will say it is true
   -if it is not uppercase we will say it is false. */

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
