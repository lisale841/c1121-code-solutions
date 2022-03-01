/* exported maxValue */
// pseudo-code
// check if it is empty if it is then return -Infinity
// compare each value with each other.
// this was hard. -____-

function maxValue(stack) {
  let max = -Infinity;
  while (typeof stack.peek() !== 'undefined') {
    max = Math.max(max, stack.pop());
  }
  return max;
}
