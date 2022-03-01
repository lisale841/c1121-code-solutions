/* exported insertUnderTop */
// pseudo code
// take out the oldtop store in a variable
// insert the new value so that is on top
// insert the oldtop so that is on top of the new value
//

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const oldTop = stack.pop();
    stack.push(value);
    stack.push(oldTop);
    return stack.peek();
  }
}
