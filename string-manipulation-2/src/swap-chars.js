/*  - create a storage for the word
    - seperate the word into letters
    - look thru the letters in the word one by one
    - change the order for the letters based on the location provided
    - join the letters together
    - give back the word. */

/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swap = '';
  var swapChars = [];
  for (var i = 0; i <= string.length - 1; i++) {
    swap = string[i];
    swapChars.push(swap);
  }
  var firstLetter = swapChars[firstIndex];
  var secondLetter = swapChars[secondIndex];

  swapChars[firstIndex] = secondLetter;
  swapChars[secondIndex] = firstLetter;
  var newWord = swapChars.join('');
  return newWord;
}
