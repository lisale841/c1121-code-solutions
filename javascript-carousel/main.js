// var $imagesContainer = document.querySelector('.images-container');
var $view = document.querySelectorAll('.view');
var $circle = document.querySelectorAll('.fa-circle');
var $rightButton = document.querySelector('.fa-angle-right');
var $leftButton = document.querySelector('.fa-angle-left');
var $circleContainer = document.querySelector('.circle-btn-container');

function rightClicker(event) {
  var $rightClick = event.target.matches('.right-btn');

  if ($rightClick) {

    var viewer = event.target.getAttribute('data-view');
    for (var i = 0; i < $circle.length; i++) {
      if ($circle[i].getAttribute('data-view') === viewer) {
        $circle[i].className = 'fas fa-circle';
      } else {
        $circle[i].className = 'far fa-circle';
      }
    }

    for (var k = 0; k < $view.length; k++) {
      if ($view[k].getAttribute('data-view') === viewer) {
        $view[k].className = 'view';
      } else {
        $view[k].className = 'view hidden';
      }
    }
  }
}

function leftClicker() {

}
$rightButton.addEventListener('click', rightClicker);
$leftButton.addEventListener('click', leftClicker);

function circleClicker(event) {
  var activeCircle = event.target.matches('.fa-circle');

  if (activeCircle) {

    var viewer = event.target.getAttribute('data-view');
    for (var i = 0; i < $circle.length; i++) {
      if ($circle[i].getAttribute('data-view') === viewer) {
        $circle[i].className = 'fas fa-circle';
      } else {
        $circle[i].className = 'far fa-circle';
      }
    }

    for (var k = 0; k < $view.length; k++) {
      if ($view[k].getAttribute('data-view') === viewer) {
        $view[k].className = 'view';
      } else {
        $view[k].className = 'view hidden';
      }
    }
  }
}
$circleContainer.addEventListener('click', circleClicker);

// var counter = 0;
// function updatingPhotos() {

//   counter = counter + 1;
//   if (counter <= $view.length - 1) {
//     $view[counter].className = 'view';
//     $view[counter - 1].className = 'view hidden';
//   } else {
//     clearInterval(interval);

//   }
// }

// var interval = setInterval(updatingPhotos, 2000);
