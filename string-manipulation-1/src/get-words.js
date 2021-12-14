/* exported getWords */
/* - if there are no text then we do not give back anything.
   - however, if there are text create a storage for it
   - if the text has multiple words split it into seperate words
   -  give back those seperated words. */

function getWords(string) {

  if (string === '') {
    return [];
  }

  var words = string.split(' ');
  return words;
}
