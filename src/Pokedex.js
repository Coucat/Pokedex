import React from 'react';
import Header from './componets/Header';
import SearchNav from './componets/SearchNav';
import Pokemons from './componets/pokemonCard';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchNav />
      <Pokemons />
    </div>
  );
}

export default App;
