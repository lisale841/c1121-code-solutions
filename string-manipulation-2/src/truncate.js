/* create a storage to contain the new text.
   take a look at the old text and
   */
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
