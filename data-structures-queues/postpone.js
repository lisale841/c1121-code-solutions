/* exported postpone */

// pseudo-code
// if not undefined
// take the front of stack (dequeue)
// move to the back enqueue(value)

function postpone(queue) {
  if (queue.peek() === undefined) {
    // means stack is not empty
    return 'nothing';
  } else {

    const oldTop = queue.dequeue();
    // returns the front of the queue.
    return queue.enqueue(oldTop);
    // takes the queue and sends the front of the queue to the back.
  }

}
