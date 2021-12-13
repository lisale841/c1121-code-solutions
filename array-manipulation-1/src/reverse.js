/* - create a storage for the list of items
   - starting from the last item of the list and going one by one all the way to the first item of the list
   - add those items into the storage
   - give back those items.
    */
/* exported reverse */
function reverse(array) {
  var backwards = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}
