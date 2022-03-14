/* exported getLength */

function getLength(list) {
  let newList = list;
  let i = 1;
  while (newList.next) {
    newList = newList.next;
    i++;
  }
  return i;
}

//  it('returns the number of nodes in `list`', () => {
//     const list1 = new LinkedList(82);
// newList = 82
// nothing left in the list return i ; so i = 1.
//     expect(getLength(list1)).to.equal(1);
//     const list2 = new LinkedList(null, '', false, 0, NaN);
// psuedo-codes:
// newList = null, '', false, 0, NaN
// i starts at 1
// if there is another node after then update newList
// increment i by 1.  continue loop.
//     expect(getLength(list2)).to.equal(5);
