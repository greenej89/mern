import { useState, useEffect } from 'react' 
import axios from 'axios' 
import { useParams, useNavigate } from 'react-router-dom'

const ProductDetails = ({deleteProduct}) => {

  const [product, setProduct] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='mt-5'>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button className='col-1 btn btn-danger ms-2' 
        onClick={ e => {
          deleteProduct(product._id)
          navigate('/api')
        }} 
        >Delete</button>
    </div>
  )
}

export default ProductDetails