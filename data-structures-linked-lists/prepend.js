/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */
// list is an object
// value new on list
// add value to new list and save it in a variable
// use next to go to the next node and save it to list
// return the newlist.

// Parameters
// list - a LinkedList object containing one or more nodes.
// value - any JavaScript value that can be converted into JSON.
// Return Value
// The new first node in the list.

function prepend(list, value) {
  const newList = new LinkedList(value);
  newList.next = list;
  return newList;
}

// 'LinkedList { "hat" <- "head" <- "neck" <- "back" <- "tail" }'
