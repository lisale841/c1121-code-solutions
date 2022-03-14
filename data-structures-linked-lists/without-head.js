/* exported withoutHead */

function withoutHead(list) {
  return list.next;
}

// .data - contains the node's value.
// .next a reference to the next node in the list, if there is one. If there is no "next" node in the list, this property is typically set to null.
