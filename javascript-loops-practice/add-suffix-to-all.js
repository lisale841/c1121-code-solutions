/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];

  for (var i = 0; i < words.length; i++) {
    array.push((words[i] + 1) + suffix);

  }
  return array;
}
