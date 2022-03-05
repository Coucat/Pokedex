import React from 'react';
import { Grid } from './styles';
import PokemonCard from './pokemonCard';

function Pokemons() {
  const data = [
    {
      name: 'Bulbasaur',
      id: '1',
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
    },
    {
      name: 'Ivysaur',
      id: '2',
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif',
    },
    {
      name: 'Venusaur',
      id: '3',
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif',
    },
    {
      name: 'Charmander',
      id: '4',
      types: [{ type: { name: 'fire' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif',
    },
    {
      name: 'Charmeleon',
      id: '5',
      types: [{ type: { name: 'fire' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif',
    },
    {
      name: 'Charizard',
      id: '6',
      types: [{ type: { name: 'fire' } }, { type: { name: 'flying' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif',
    },
    {
      name: 'Squirtle',
      id: '7',
      types: [{ type: { name: 'water' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif',
    },
    {
      name: 'Wartortle',
      id: '8',
      types: [{ type: { name: 'water' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif',
    },
    {
      name: 'Blastoise',
      id: '9',
      types: [{ type: { name: 'water' } }],
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif',
    },
  ];
  return (
    <Grid>
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        data.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />)
      }
    </Grid>
  );
}
export default Pokemons;
