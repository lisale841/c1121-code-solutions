fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(json => console.log(json));
