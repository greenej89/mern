import { useState } from 'react'
import axios from 'axios'

const PersonForm = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const handleOnSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then( res => console.log(res.data))
            .catch( err => console.log(err))
    }
    return(
        <>
            <h1>Product Manager</h1>
            <form onSubmit={handleOnSubmit} className="form-horizontal mt-3">
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
                <input type="submit" value="Create" className="border-0 col-2 bg-muted text-secondary"/>
            </form>
        </>
    )
}

export default PersonForm