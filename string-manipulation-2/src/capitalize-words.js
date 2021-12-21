/* - create a storage for the text
  - seperate the line of text into their own words
  - make the first letter of the word uppercase and the rest lowercase
  - combine the new word with the correct capitalization into the line of text
  - after that return the line of text. */
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
