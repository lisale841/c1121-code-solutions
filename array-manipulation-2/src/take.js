/*  -create a new storage to hold the items
    - look thru the items one by one
    - go thru the items in order and only take the number of items that you need
    - put those items into the storage that you create earlier.
    - get that storage with the items. */

/* exported take */
function take(array, count) {
  var newArray = [];

  for (var i = 0; i <= count - 1; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
