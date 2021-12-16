var lightsOn = true;
var $yellowButton = document.querySelector('.yellow-button');
var $whiteBackground = document.querySelector('.white-background');

function clicker(event) {

  if (lightsOn) {
    $whiteBackground.className = 'black-background';
    $yellowButton.className = 'black-button';
    lightsOn = false;
  } else {
    $whiteBackground.className = 'white-background';
    $yellowButton.className = 'yellow-button';
    lightsOn = true;
  }
}

$yellowButton.addEventListener('click', clicker);
