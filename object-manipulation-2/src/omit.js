/* - make a new storage
   - look in the object and grab the properties and put into a list
   - look into the other list of items and compare it to the previous list one by one
   - if the items match then we do not put it in the new storage
   - if the items do not match then we put it into the storage
   - get the storage. */
/* exported omit */
function omit(source, keys) {
  var newObj = {};
  for (var prop in source) {
    var found = false;

    for (var key of keys) {
      if (prop === key) {
        found = true;
      }
    }
    if (found === false) {
      newObj[prop] = source[prop];
    }
  }
  return newObj;
}

// option 2
// function omit(source, keys) {
//   var newObj = {};
//   var array = Object.keys(source);

//   for (var i = 0; i <= array.length - 1; i++) {
//     var found = false;
//     for (var j = 0; j <= keys.length - 1; j++) {
//       if (array[i] === keys[j]) {
//         found = true;
//       }
//     }
//     if (found === false) {
//       newObj[array[i]] = source[array[i]];

//     }
//   }
//   return newObj;
// }
