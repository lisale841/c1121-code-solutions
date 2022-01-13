/* - create a storage
   - grab the properties of the object
   - take the value and make it the property of the new object and the value the property
   - take back the storage.

*/
/* exported invert */

function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
