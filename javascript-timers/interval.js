var $countDown = document.querySelector('.countdown-display');
var count = 4;
function countingDown() {
  count = count - 1;
  if (count > 0) {
    $countDown.textContent = count;

  } else {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(countingDown, 2000);
