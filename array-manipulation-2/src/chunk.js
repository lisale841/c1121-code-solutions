/* - create storages to contain the list of items
   - look thru the items one by one and in order.
   -based on the number for the storage size put the items in it to max out the storages put the leftovers if any in their own storage
   -get those storages with items
   */
/* exported chunk */

function chunk(array, size) {

  var finalArray = [];

  for (var i = 0; i <= array.length - 1; i = i + size) {
    finalArray.push(array.slice(i, i + size));
  }
  return finalArray;

}

// // test 2 notes
// var finalArray = [];
// var arrayCounter = 0;

// for (var i = 0; i <= array.length - 1; i++) {
//   if (!finalArray[arrayCounter]) {
//     finalArray[arrayCounter] = [];
//   }

//   finalArray[arrayCounter].push(array[i]);

//   if (finalArray[arrayCounter].length === size) {
//     arrayCounter++;
//   }
// }

// return finalArray;
