import React from 'react';
import ReactDOM from 'react-dom';

function Pokemon(props) {
  const pokemons = (
    <ul>
      {props.pokedex.map(pokemon =>
        <li key={pokemon.id}>
          {pokemon.name}
        </li>
      )}
    </ul>
  );

  return (
    <div>
      {pokemons}
    </div>
  );
}
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <Pokemon pokedex={pokedex} />,
  document.getElementById('root')
);
