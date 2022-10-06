import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Home = ({productList, setProductList, deleteProduct}) => {

  return (
    <div>
      <ProductForm productList={productList} setProductList={setProductList}/>
      <hr/>
      <ProductList productList={productList} setProductList={setProductList} deleteProduct={deleteProduct}/>
    </div>
  )
}
export default Home

