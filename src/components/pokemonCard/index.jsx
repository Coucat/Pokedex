import React from 'react';
import { Grid } from './styles';
import PokemonCard from './pokemonCard';

function Pokemons() {
  return (
    <Grid>
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" />
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif" />
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif" />
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" />
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" />
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" />
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" />
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" />
      <PokemonCard name="Bulbasaur" id="N°. 001" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" />
    </Grid>
  );
}
export default Pokemons;
