/* -create a storage to store a list of items
   - starting from the second item on the list and one at a time up to the final item
   - add those items into the storage created earlier
   - give back the items in the list. */

/* exported tail */

function tail(array) {
  var newArray = [];
  for (var i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
