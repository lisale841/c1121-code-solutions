var $taskList = document.querySelector('.task-list');
// var $ul = document.querySelector('ul');

function clicker(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.name !== 'BUTTON') {
    //   console.log((targetElement.closest('li')
    // };

  }
}

$taskList.addEventListener('click', clicker);
// Get the event.target's closest('.task-list-item') ancestor element.
// Log that.task - list - item element to the console.It should be the parent list item element of the clicked button.
//     remove() that.task - list - item element from the DOM
