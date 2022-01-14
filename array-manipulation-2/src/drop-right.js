/* - make a new storage to store the list of items
   - look thru the list of items one by one in order if no items then make the storage empty.
   - ignore the items from the end based on the number and keep the rest
   - store those items into the storage created earlier
   - get that storage with the items. */
/* exported dropRight */
function dropRight(array, number) {
  var newArray = [];
  var length = array.length - number;
  if (length < 0) {
    length = 0;
  }
  for (var i = 0; i < length; i++) {

    newArray.push(array[i]);

  }
  return newArray;
}
