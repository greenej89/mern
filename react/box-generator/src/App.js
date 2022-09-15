
import './App.css'
import Form from './components/Form'
import Box from './components/Box'
import { useState } from 'react'

function App() {
  const [boxes, setBoxes] = useState([])

  return (
    <div className="container App">
      <Form 
        boxes={ boxes } 
        setBoxes={ setBoxes }
      />
      <div className="row" >
          {
            boxes.map( ( box, index ) => 
              <div className="d-flex justify-content-center col-4 mb-5">
                <Box key={index} box={box} />
                </div>
            )
          }
      </div>
    </div>
  )
}

export default App;
