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
