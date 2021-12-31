var $userList = document.getElementById('user-list');

function getUser(name) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    console.log(xhr.response);

    for (var i = 0; i <= xhr.response.length - 1; i++) {
      console.log(xhr.response[i]);

      var $li = document.createElement('li');
      $li.textContent = xhr.response[i].name;
      $userList.appendChild($li);
    }
  });
  xhr.send();
}

getUser(name);
