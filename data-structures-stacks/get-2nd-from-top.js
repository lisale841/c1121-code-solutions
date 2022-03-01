/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const oldTop = stack.pop();
    const newTop = stack.peek();
    stack.push(oldTop);
    return newTop;
  }

}
