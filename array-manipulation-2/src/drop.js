/* - create a new storage for the items
   - look thru the list of items one by one
   - going in order start grabbing the items in the list after the number provided
   - store the items into the new storage
   - get that storage with the items
   */
/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i <= array.length - 1; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
