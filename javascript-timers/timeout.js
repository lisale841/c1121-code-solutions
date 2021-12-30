var $message = document.querySelector('.message');

function updateMessage() {
  $message.textContent = 'Hello there';
}

setTimeout(updateMessage, 2000);
