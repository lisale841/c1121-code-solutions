/* exported getWords */

/* -storage for the location of the text
   - find out how many words are in the text
   - return the

function getWords */

function getWords(string) {

  if (string === '') {
    return [];
  }

  var words = string.split(' ');
  return words;
}
