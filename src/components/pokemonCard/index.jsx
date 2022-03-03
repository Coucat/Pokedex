import React from 'react';
import { Grid } from './styles';
import PokemonCard from './pokemonCard';

function Pokemons() {
  const types = [
    {
      slot: 1,
      type: {
        name: 'fire',
      },
    },
    {
      slot: 2,
      type: {
        name: 'dragon',
      },
    },
  ];
  return (
    <Grid>
      <PokemonCard className="1" name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" types={types} />
    </Grid>
  );
}
export default Pokemons;
