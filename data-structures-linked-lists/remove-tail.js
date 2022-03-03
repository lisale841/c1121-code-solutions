/* exported removeTail */

function removeTail(list) {
  if (list.next) { // 'neck
    let test = list.next; // 'neck
    while (test) { // 'back true?
      if (!test.next.next) { //  'back', null, null?
        test.next = null;
      }
      test = test.next; // 'null'
    }
  }
}

// notes-
// goal/objective - remove the last one on the list which is 'tail'
// loop thru until newList.next is null that means it is the last one.

//  it('removes the last node from `list`', () => {
//       const list = new LinkedList('head', 'neck', 'back', 'tail');
//       removeTail(list);
//       expect(list.print()).to.equal(
//         'LinkedList { "head" <- "neck" <- "back" }'
//       );
//     });
