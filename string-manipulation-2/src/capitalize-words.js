/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var newWords = [];
  for (var i = 0; i <= words.length - 1; i++) {
    var upperCase = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    newWords.push(upperCase);
  }
  var join = newWords.join(' ');
  return join;
}
