var $taskList = document.querySelector('.task-list');

function clicker(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.name !== 'BUTTON') {
    var $taskList = event.target.closest('.task-list-item');
    console.log($taskList);
    $taskList.remove();
  }
}

$taskList.addEventListener('click', clicker);
