import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import ProductDetails from './components/ProductDetails'
import UpdateProduct from './components/UpdateProduct'

function App() {

  return (
    <div className="App container ">
      <BrowserRouter>
        <Routes>
          <Route path='/api' element={<Home/>}/>
          <Route path='/api/products/:id' element={<ProductDetails/>}/>
          <Route path='/api/products/:id/edit' element={<UpdateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
