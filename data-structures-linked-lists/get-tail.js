/* exported getTail */
// loop thru
// when it is undefined
// return the last one with dot data.

function getTail(list) {
  let newList = list;

  while (newList.next) {
    newList = newList.next;

  }
  return newList.data;

}

//  it('returns the last value of `list`', () => {

//     const list1 = new LinkedList(13);
//     expect(getTail(list1)).to.equal(13);
//     list1.next = new LinkedList(9);
//     expect(getTail(list1)).to.equal(9);

//     const list2 = new LinkedList(null, '', false);
//     expect(getTail(list2)).to.equal(false);

//   });
