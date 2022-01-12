/* exported pick */
// function pick(source, keys) {
//   var newObj = {};
//   for (var key in source) {
//     if (keys.includes(key) !== undefined) {
//       if (keys.includes(key)) {
//         newObj[key] = source[key];

//       }
//     }
//   }
//   return newObj;
// }
function pick(source, keys) {
  var newObj = {};
  for (var key of keys) {
    var i = source[key];
    if (i !== undefined) {
      newObj[key] = i;
    }
  }
  return newObj;
}
