/* -create a storage for the last character in the word.
   - find the last character in the word
   - get that last character and give it back to get result. */
/* exported getLastChar */
function getLastChar(string) {
  var lastCharacter = string.charAt(string.length - 1);
  return lastCharacter;
}
