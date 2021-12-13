/*  -create a storage for the property of the object.
    - locate the properties
    - add the properties into the storage
    - give back the properties. */
/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
