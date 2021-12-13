/* -create a storage for the list of items
   -for every item in the list one at a time and not including the last item.
   - add those items into the storage
   - give back the list of items
 */
/* exported initial */
function initial(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 2; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
