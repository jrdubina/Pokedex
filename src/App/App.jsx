import React from 'react';
import { ContextPokemon } from '../_context'
import './_styles/App.scss';
import { Pokedex } from '../_components/Pokedex';

function App() {
  return (
    <ContextPokemon>
      <>
      <Pokedex />
      </>
    </ContextPokemon>
  );
}

export { App };
