/* -create a storage for the list of items
    - look into the items and get the property value
    - add those into the storage
    - give back the result of that.
    */

/* exported getValues */

function getValues(object) {

  var values = [];

  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
