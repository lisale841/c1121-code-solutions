/* exported takeSmaller */
// pseudo code
// check to see if empty. if it is make it undefined
// if not empty then remove the first item and store it in a variable.
// if there is no second item then return the first item.
// if there is second item then remove the second item and store it in a variable.
// check if first item is equal to second item.
// if equal then move the second item to the back of the queue
// return the first item. - test says if equal send either to the back.
// if first item is smaller than the second item
// move the second item to the back
// return the first item because it is smaller.
// if first bigger > than second item than move it to the back
// return the second item because it is smaller.

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
    // if empty make it undefined
  }
  const firstItem = queue.dequeue();
  // if not empty then remove the first item and store it in a variable.
  if (queue.peek() === undefined) {
    // if there is no second item then return the first item.
    return firstItem;
  }

  const secondItem = queue.dequeue();
  // if there is second item then remove the second item and store it in a variable.

  if (firstItem === secondItem) {
    // check if first item is equal to second item.
    queue.enqueue(secondItem);
    // if equal then move the second item to the back of the queue
    return firstItem;
    // return the first item.
  } else if (firstItem < secondItem) {
    // if first item is smaller than the second item
    queue.enqueue(secondItem);
    // move the second item to the back
    return firstItem;
    // return the first item because it is smaller.
  } else {
    queue.enqueue(firstItem);
    // if first bigger > than second item than move it to the back
    return secondItem;
    // return the second item because it is smaller.
  }
}

// enqueue(value) - adds a value to the "back" of the queue
// dequeue() - removes the "front" value from the queue and returns it

// const queue2 = new Queue(-89, 0, 35);
