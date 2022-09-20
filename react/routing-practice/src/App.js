
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router'

const Home = (props) => {
  return(
    <h1>Welcome</h1>
  )
}

const DisplayInput = (props) => {
  const { input }  = useParams()

  if( isNaN(input) ) {
    return(
      <h1>The word is: { input }</h1>
    )
  } else {
    return(
      <h1>The number is: { input }</h1>
    )
  }
}

const DisplayBanner = (props) => {
  const { word, color, background } = useParams()
  return(
    <div style={{backgroundColor: background}}>
      <h1 style={{color: color, border: '1px solid black'}}>The word is: { word }</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/:input" element={<DisplayInput />}/>
          <Route path="/:word/:color/:background" element={<DisplayBanner/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
