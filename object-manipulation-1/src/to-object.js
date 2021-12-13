/* - create a storage to store the property
   - get the property and value
   - give back the result of that. */
/* exported toObject */
function toObject(keyValuePair) {
  var result = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
}
