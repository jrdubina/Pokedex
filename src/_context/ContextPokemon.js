import React, { useState, useEffect } from 'react';
import { PokemonContext } from './Context';
import { pokeServices } from '../_services';

export const ContextPokemon = ({children}) => {
    const [ PokemonData, setPokemonData ] = useState({});

    const getPokemon = async ()=> {
      const pokemon = await pokeServices.getAll();
      setPokemonData(pokemon);
    }
  
    useEffect(() =>{
        getPokemon();
      },[]);

      return(
        <PokemonContext.Provider value={[ PokemonData, setPokemonData ]}>
          {children}
        </PokemonContext.Provider>
   );
};