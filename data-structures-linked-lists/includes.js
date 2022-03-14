/* exported includes */

function includes(list, value) {
  while (list) {

    if (list.data === value) {
      return true;
    }
    list = list.next;
  }
  return false;
}

// const list2 = new LinkedList('billy', 'mandy', 'grim', 'irwin');
//   expect(includes(list2, 'billy')).to.equal(true);
//   expect(includes(list2, 'mandy')).to.equal(true);
//   expect(includes(list2, 'grim')).to.equal(true);
//   expect(includes(list2, 'irwin')).to.equal(true);

// });
// check if list is true
// check list
// 1st iteration: list true , (list data billy) = billy, return true loop
// 2nd : list true , (list data mandy) = mandy, return true loop
// 3rd  list true , (list data grim) = grim , return true loop
// 4th list true , (list data irwin) = irwin, return true loop
// 5th list false, list.next = null; ends loop.
