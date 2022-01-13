/* - look at the properties of source
   - check to see if the property in target does not equal the property in source
   - if it does not equal then we can add that property to target
   */
/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    if ((key in target) !== (key in source)) {
      target[key] = source[key];
    }
  }
}
