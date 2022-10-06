import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <div className="App container ">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/api/products/:id' element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
