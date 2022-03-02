/* exported takeFront */

function takeFront(queue) {
  if (queue.peek() === undefined) {
    return undefined;
    // if empty return undefined
  } else {
    const front = queue.peek();
    // put the front in a variable
    queue.dequeue();
    // take the front and remove it.
    return front;
  // return front
  }

}

// enqueue(value) - adds a value to the "back" of the queue
// dequeue() - removes the "front" value from the queue and returns it
