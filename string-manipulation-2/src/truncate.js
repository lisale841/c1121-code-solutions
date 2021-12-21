/* -create a storage to contain the word
  - take a look at the word and going one by one letter by letter until we reach the end
  - after looking at the letters in teh word only print out the letters based on the number
   provided to print out the letter based on the order of the letters.
   - after printing out the letter add ... to the end of it
   - give back the new word/words.
  - */
/* exported truncate */

function truncate(length, string) {
  var truncateWord = '';
  for (var i = 0; i <= length - 1; i++) {
    if (i < string.length) {
      truncateWord = truncateWord + string[i];
    }
  }
  return truncateWord + '...';
}
