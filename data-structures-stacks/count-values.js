/* exported countValues */
// pseudo code
// pop until the value is undefined.
// count the number of pops.

function countValues(stack) {

  let i = 0;
  while (stack.peek() !== undefined) {
    i++;
    stack.pop();
  }
  return i;
}
