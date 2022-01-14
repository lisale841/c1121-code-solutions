/* -create a storage to hold the items.
  - make sure that the number of items is not less than the number of items needed. if there are no items or less make it zero.
  - looking thru the list of items
  - take only the items that you need based on the number provided
  - store those items into the storage created earlier
  - grab that storage with the items created earlier
*/
/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  var length = array.length - count;
  if (length < 0) {
    length = 0;
  }
  for (var i = length; i <= array.length - 1; i++) {

    newArray.push(array[i]);

  }
  return newArray;
}
