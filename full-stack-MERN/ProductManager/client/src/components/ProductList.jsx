import axios from "axios"
import { useEffect } from "react"
import { Link } from 'react-router-dom'

const ProductList = ({productList, setProductList}) => {

  useEffect(()=> {
    axios.get('http://localhost:8000/api/products')
      .then( res => {
        console.log(res.data)
        setProductList(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const deleteProduct = productId => {
    axios.delete('http://localhost:8000/api/products/' + productId)
      .then( confirmDelete => console.log('Deleted product', confirmDelete))
      .catch( err => console.log( err ) )
  }

  return (
    <div>
      <h2>All Products</h2>
      {
        productList.map((product)=>(
            <div key={product._id} className='row d-flex justify-content-center mb-2'>
                <Link to={`/api/products/${product._id}`} className='col-4 text-start'> {product.title}</Link>
                <Link to={`/api/products/${product._id}/edit`} className='col-1 btn btn-info'>Edit</Link>
                <button onClick={ e => deleteProduct(product._id)} className='col-1 btn btn-danger ms-2'>Delete</button>
            </div>
        )
      )}
    </div>
  )
}

export default ProductList