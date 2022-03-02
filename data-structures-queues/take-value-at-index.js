/* exported takeValueAtIndex */
//
function takeValueAtIndex(queue, index) {

  for (var i = 0; i <= index; i++) {
    if (queue.peek() === undefined) {
      return undefined;
    // if empty make it undefined
    }
    const item = queue.dequeue();
    // remove item from front and save to a variable.
    if (i === index) {
      // if the value of i is equal to index then return the item.
      return item;
    }
    queue.enqueue(item);
    // if not move that item to the back and continue the loop.

  }
}
// enqueue(value) - adds a value to the "back" of the queue
// dequeue() - removes the "front" value from the queue and returns it

// example:
// queue = [a,b,c]  ; index = 1
