import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './componets/Header';
import SearchNav from './componets/SearchNav';
import Pokemons from './componets/pokemonCard';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Pokedex</title>
        <meta
          name="description"
          content="Pokedex with all the information you need, list of Pokemons with stats, check out your favorite Pokemon."
          keywords="pokemon, Pokemons, pokedex, stats, type, pikachu, game, pokeball"
        />
      </Helmet>
      <div className="App">
        <Header />
        <SearchNav />
        <Pokemons />
      </div>
    </HelmetProvider>
  );
}

export default App;
