/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
    // if empty then return undefined
  }
  let item = queue.dequeue();
  // remove the front value and store it in a variable
  if (queue.peek() === undefined) {
    // if the current front value is undefined then there is no more items.
    return item;
    // return the item
  }
  while (item >= queue.peek()) {
    // if item is bigger than or equal to the current front.
    queue.enqueue(item);
    // move the item to the back of the queue
    item = queue.dequeue();
    // remove the front value and store it in a variable. continue loop until false.
  }
  return item;
  // return the item.
}

// enqueue(value) - adds a value to the "back" of the queue
// dequeue() - removes the "front" value from the queue and returns it

// example : [3,2,1,2]
