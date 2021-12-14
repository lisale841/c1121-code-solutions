/* -create a storage to store the last element on the list
   -update the storage with the last element from the list
   - give back the last item on the list */
/* exported last */
function last(array) {
  var lastElement = array.length - 1;
  var element = array[lastElement];
  return element;
}
