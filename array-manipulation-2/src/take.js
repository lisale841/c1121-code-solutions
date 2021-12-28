/* input: array, count
/* -create a storage to store the new list
   - */
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
