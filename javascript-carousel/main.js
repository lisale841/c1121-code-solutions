var $view = document.querySelectorAll('.view');
var $circle = document.querySelectorAll('.fa-circle');
var $nextImage = document.querySelector('.fa-angle-right');
var $prevImage = document.querySelector('.fa-angle-left');
var $circleContainer = document.querySelector('.circle-btn-container');

function updateCarousel(forward) {
  var currentView;
  for (var i = 0; i <= $view.length - 1; i++) {
    if (!$view[i].matches('.hidden')) {
      if (forward) {
        currentView = i + 1;
        if (currentView === $view.length) {
          currentView = 0;
        }
      } else {
        currentView = i - 1;
        if (currentView < 0) {
          currentView = $view.length - 1;
        }
      }
    }
    $view[i].className = 'view hidden';
    $circle[i].className = 'far fa-circle';
  }
  $view[currentView].className = 'view';
  $circle[currentView].className = 'fas fa-circle';
}

function rightClicker() {
  updateCarousel(true);
  clearInterval(interval);
  interval = setInterval(updatingPhotos, 2000);

}

function leftClicker() {
  updateCarousel(false);
  clearInterval(interval);
  interval = setInterval(updatingPhotos, 2000);
}

$nextImage.addEventListener('click', rightClicker);
$prevImage.addEventListener('click', leftClicker);

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

function updatingPhotos() {
  updateCarousel(true);
}

var interval = setInterval(updatingPhotos, 2000);
