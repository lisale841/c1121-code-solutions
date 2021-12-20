var $letters = document.querySelectorAll('.letters span');

var keydowncount = 0;
$letters[keydowncount].setAttribute('class', 'underline');

function logKey(event) {

  if (event.key === $letters[keydowncount].textContent) {
    $letters[keydowncount].setAttribute('class', 'success');
    keydowncount = keydowncount + 1;
    $letters[keydowncount].setAttribute('class', 'underline');

  } else {
    $letters[keydowncount].setAttribute('class', 'fail underline');

  }
}

document.addEventListener('keydown', logKey);
