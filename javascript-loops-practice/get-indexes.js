/* exported getIndexes */

function getIndexes(array) {
  var indexList = [];
  for (var i = 0; i < array.length; i++) {
    indexList.push(array.indexof(i));
  }
  return indexList;
}
