import React, { useState, useEffect } from 'react';
import { PokemonContext } from './Context';
import { pokeServices } from '../_services';

export const ContextPokemon = ({children}) => {
    const [ pokemonData, setPokemonData ] = useState({});

    const getPokemon = async ()=> {
      const pokemon = await pokeServices.getAll();
      setPokemonData(pokemon);
    }
  
    useEffect(() => {
        console.log(pokemonData)
        getPokemon();
      },[]);

      return(
        <PokemonContext.Provider value={[ pokemonData, setPokemonData ]}>
          {children}
        </PokemonContext.Provider>
   );
};