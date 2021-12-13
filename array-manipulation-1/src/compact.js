/* -create a storage for the list of items
   - for ever item in the list one by one we are checking it to see if it is truthy.
   - add those items into the list
   - give back the list of items. */
/* exported compact */
function compact(array) {
  var elements = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i]) {
      elements.push(array[i]);
    }
  }
  return elements;
}
