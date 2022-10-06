import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import ProductDetails from './components/ProductDetails'
import UpdateProduct from './components/UpdateProduct'
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [productList, setProductList] = useState([])  
  const deleteProduct = productId => {
    axios.delete('http://localhost:8000/api/products/' + productId)
      .then( confirmDelete => console.log('Deleted product', confirmDelete))
      .catch( err => console.log( err ) )
    setProductList(productList.filter( product => product._id != productId))
  }

  return (
    <div className="App container ">
      <BrowserRouter>
        <Routes>
          <Route path='/api' element={<Home productList={productList} setProductList={setProductList} deleteProduct={deleteProduct} />}/>
          <Route path='/api/products/:id' element={<ProductDetails productList={productList} setProductList={setProductList} deleteProduct={deleteProduct} />}/>
          <Route path='/api/products/:id/edit' element={<UpdateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
