var userClicks = 0;
var $yellowButton = document.querySelector('.yellow-button');
var $whiteBackground = document.querySelector('.white-background');

function clicker(event) {
  event.stopPropagation();
  userClicks++;

  if (userClicks % 2 === 0) {
    $whiteBackground.className = 'black-background';
    $yellowButton.className = 'black-button';
  } else {
    $whiteBackground.className = 'white-background';
    $yellowButton.className = 'yellow-button';
  }
}

$yellowButton.addEventListener('click', clicker);
$whiteBackground.addEventListener('click', clicker);
