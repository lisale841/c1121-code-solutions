/* exported take2nd */

// pseudo code
// if queue is empty return undefined
// returns the front of the queue and stores it into a variable.
// takes the queue and sends the front of the queue to the back.
// returns front of the queue

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
    // empty return undefined
  } else {
    const oldTop = queue.dequeue();
    // returns the front of the queue and stores it into a variable.
    queue.enqueue(oldTop);
    // takes the queue and sends the front of the queue to the back.
    return queue.dequeue();
    // returns front of the queue
  }

}
