import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { getPokemon, getAllPokemon } from './fetchApi/pokemon';
import './App.css';

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon';
  
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(MAIN_URL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      

    }
    fetchData();
  }, [])

  const next = async () => {
    
    let data = await getAllPokemon(nextUrl);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    await loadPokemon(data.results);
   
  }

  const prev = async () => {
    if (!prevUrl) return;
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }

  const loadPokemon = async (data) => {
    
    let _pokemonData = await Promise.all(data.map(async nameAndUrl => {
      let pokemonRecord = await getPokemon(nameAndUrl)
      
      return pokemonRecord
      
    }))
    
    setPokemonData(_pokemonData);
  }

  return (
    <>
      <Navbar />
      <div>
          <>
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemonProps={pokemon} />
              })}
            </div>
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
          </>
        
      </div>
    </>
  );
}

export default Pokedex;
