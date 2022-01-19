
var count = 4;
function countingDown() {
  count--;
  // count = count - 1;
  if (count > 0) {
    console.log(count);

  } else {
    console.log('Blast off!');
    clearInterval(interval);
  }
}

var interval = setInterval(countingDown, 2000);
