/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const rest = list.next;
  list.next = new LinkedList(value);
  list.next.next = rest;
}

// const list = new LinkedList('head', 'neck', 'back', 'tail');
// notes
// list.data = 'head'
// list.next.data = 'neck'
// list.next = 'neck node'
// rest = 'neck node'
//  insertNext(list, 'strobe light');
//  'LinkedList { "head" <- "strobe light" <- "neck" <- "back" <- "tail" }'
