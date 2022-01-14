/* - looking thru the list of items one by one
   - check to see if any of the items matches the item you are looking for
   - if it matches any of the items say it is true that it matches
   - if it does not match any of the items it is false. */
/* exported includes */

function includes(array, value) {
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}
