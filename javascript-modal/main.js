var $modal = document.querySelector('.modal');
var $myBtn = document.querySelector('.my-btn');
var $modalButton = document.querySelector('.modal-button');

function openModal(event) {
  $modal.className = 'modal open';
}

function closedModal(event) {
  $modal.className = 'modal';
}
$myBtn.addEventListener('click', openModal);
$modalButton.addEventListener('click', closedModal);
