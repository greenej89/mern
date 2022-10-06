import { useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Home = () => {

  const [productList, setProductList] = useState([])  

  return (
    <div>
      <ProductForm productList={productList} setProductList={setProductList}/>
      <hr/>
      <ProductList productList={productList} setProductList={setProductList} />
    </div>
  )
}
export default Home

