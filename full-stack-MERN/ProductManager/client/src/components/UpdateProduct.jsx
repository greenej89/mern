import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {

  const {id} = useParams()
  
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products/' + id)
      .then( existingProduct => {
        console.log(existingProduct)
        setTitle(existingProduct.data.title)
        setPrice(existingProduct.data.price)
        setDescription(existingProduct.data.description)
      })
      .catch( err => console.log( err ) )
  }, [])
  
  const updateProduct = e => {
    e.preventDefault()
    axios.put('http://localhost:8000/api/products/' + id, 
      {
        title,
        price,
        description
      })
      .then( updatedProduct => {
        console.log( 'Updated product', updatedProduct.data )
        navigate('/api/products/' + id)
    })
      .catch( err => console.log( err ) )
  }

  return (
    <div>
      <h1>Update Product</h1>
        <form onSubmit={ updateProduct } className="form-horizontal mt-3">
          <div className="row mx-auto mb-3 col-6 bg-light p-3 rounded border">
            <label htmlFor="title" className="col-3 col-form-label text-secondary" > Title </label>
            <div className="col-9">
              <input type="text" id="title" className="form-control"
                onChange = { e => setTitle(e.target.value)}
                value = { title }
              />
            </div>
          </div>
          <div className="row mx-auto mb-3 col-6 bg-light p-3 rounded border">
            <label htmlFor="price" className="col-3 col-form-label text-secondary" > Price </label>
            <div className="col-9">
              <input type="number" id="price" min="0" step="0.01" className="form-control"
                onChange = { e => setPrice(e.target.value)}
                value = { price }
              />
            </div>
          </div>
            <div className="row mx-auto mb-3 col-6 bg-light p-3 rounded border">
              <label htmlFor="description" className="col-3 col-form-label text-secondary" > Description </label>
              <div className="col-9">
                <input type="text" id="description" className="form-control"
                  onChange = { e => setDescription(e.target.value)}
                  value = { description}
                />
              </div>
            </div>
                <input type="submit" value="Update" className="border-0 col-2 text-white btn btn-info"/>
            </form>
    </div>
  )
}

export default UpdateProduct