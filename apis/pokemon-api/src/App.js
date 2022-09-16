import './App.css'
import { useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])

  // Syntax using fetch
  /* 
  useEffect( () => {     
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1154')
      .then( response => response.json() )
      .then( response => setPokemon( response.results )) 
    }, []
  })
  */

  // Syntax using axios with ES6
  useEffect ( () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1154')
      .then( response => setPokemon(response.data.results))
  }, [])

  //Syntax using axios with ES7
  /*
  useEffect( () => { getPokemon()}, [])
  async function getPokemon() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1154')
      setPokemon(response.data.results)
    } catch(error) {
      console.log(error)
    } 
    getPokemon()
  }
  */

  const capitalizeWord = ( word ) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <div className='text-center'>
      <ul className='d-inline-block'>
        { 
          pokemon.map( (monster, index) => (<li key= {index}> {capitalizeWord(monster.name)}</li>) )
        }
      </ul>
    </div>
  );
}

export default App;
