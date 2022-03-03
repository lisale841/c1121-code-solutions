/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let newList = list;

  while (newList.next) {
    newList = newList.next;

  }

  newList.next = new LinkedList(value);
}

// it('appends a node containing `value` to the end of `list`', () => {
//   const list = new LinkedList('head', 'neck', 'back', 'tail');
//   append(list, 'dirt');
//   expect(list.print()).to.equal(
//     'LinkedList { "head" <- "neck" <- "back" <- "tail" <- "dirt" }'
//   );
// });

// notes-
// the goal : append the value to the end of the list. so value dirt goes to the end.
// set list to a newList variable so original list won't be manipulated.
// loop
// once undefine means no more at the end. stop the loop
// add the value to the previous list. so newList.data = "tail" but newList.next
// would equal null, but we set newList.next to the new LinkedList(value) with value "dirt" so now
// dirt replaces null which makes it the last in the list.
