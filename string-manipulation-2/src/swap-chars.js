/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swap = '';
  var swapChars = [];
  for (var i = 0; i <= string.length - 1; i++) {
    swap = string[i];
    swapChars.push(swap);
  }
  [swapChars[firstIndex], swapChars[secondIndex]] = [swapChars[secondIndex], swapChars[firstIndex]];
  var newWord = swapChars.join('');
  return newWord;
}
