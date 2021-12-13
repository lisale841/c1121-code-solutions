/* exported capitalize */
/*
-create a storage named capital to hold the text with the first
letter capitalize
-make the first letter of the text upper case
-make the letters after the first letter lowercase
-give back the results of that and update the storage named capital.
*/
function capitalize(word) {
  var capital = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return capital;
}
