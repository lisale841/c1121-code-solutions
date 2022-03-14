/* exported updateNext */
// Parameters
// list - a LinkedList object containing one or more nodes.
// value - any JavaScript value that can be converted into JSON.
// Return Value
// None (undefined).

function updateNext(list, value) {
  if (list.next) {
    list.next.data = value;
  }
}

// const list = new LinkedList('head', 'neck', 'back', 'tail');
// value : selfie stick
// becomes :  'LinkedList { "head" <- "selfie stick" <- "back" <- "tail" }'
