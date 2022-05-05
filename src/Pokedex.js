import React from 'react';
import Pokemons from './components/pokemonCard';
import Header from './componets/Header/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokemons />
    </div>
  );
}

export default App;
