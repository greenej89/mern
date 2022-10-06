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


  return (
    <div>
      <h2>All Products:</h2>
      {
        productList.map((product)=>(
            <div key={product._id}>
              <Link to={`/api/products/${product._id}`}> {product.title}</Link>
            </div>
        )
      )}
    </div>
  )
}

export default ProductList