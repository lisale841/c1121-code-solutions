// notes:
// add a click to tab container and create a function.
// check to see what we click is a tab
// if it a tab then. loop thru the tabs to see which one is active
// if active then make the class active if not then just tab.
// only if tab was clicked
//    - get the alue of data view attribute of the event target and put it in var
//    - loop thru nodelist of view & compare each of their data view
// do the same as previous but get the view if the current tab is clicked then
// the information should pop up. information is put into view class.

var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function clicker(event) {
  var activeTab = event.target.matches('.tab');
  if (activeTab) {

    var viewer = event.target.getAttribute('data-view');
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i].getAttribute('data-view') === viewer) {
        $tab[i].className = 'tab active';
        $view[i].className = 'view';
      } else {
        $tab[i].className = 'tab';
        $view[i].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', clicker);
