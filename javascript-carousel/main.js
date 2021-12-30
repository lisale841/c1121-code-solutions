// var $imagesContainer = document.querySelector('.images-container');
var $images = document.querySelectorAll('.images');
var $rightButton = document.querySelector('.fa-angle-right');
var $leftButton = document.querySelector('.fa-angle-left');

function rightClicker() {

}

function leftClicker() {

}
$rightButton.addEventListener('click', rightClicker);
$leftButton.addEventListener('click', leftClicker);

var counter = 0;
function updatingPhotos() {

  counter = counter + 1;
  if (counter <= $images.length - 1) {
    $images[counter].className = 'images';
    $images[counter - 1].className = 'images hidden';
  } else {
    clearInterval(interval);

  }
}

var interval = setInterval(updatingPhotos, 2000);
