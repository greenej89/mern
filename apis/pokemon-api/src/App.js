import './App.css'
import { useState, useEffect} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect( () => {     
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1154')
      .then( response => response.json() )
      .then( response => setPokemon( response.results )) 
  }, [])

  const capitalizeWord = ( word ) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <div className='text-center'>
      <button >Fetch Pokemon</button>
      <ul className='d-inline-block'>
        { 
          pokemon.map( (monster, index) => (<li key= {index}> {capitalizeWord(monster.name)}</li>) )
        }
      </ul>
    </div>
  );
}

export default App;
