import {useState} from 'react'

const Form = ({boxes, setBoxes}) => {
    const [color, setColor] = useState('')
    const [size, setSize] =useState('')
    const [colorError, setColorError] = useState('')
    const [sizeError, setSizeError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if( color && size ) {
            const box = { size, color } 
            setBoxes([...boxes, box])
            setColor('')
            setSize('')
        } 
        if( !color ){
            setColorError('Please select a color.')
        }
        if( !size ) {
            setSizeError('Please select a size between 50 and 150.')
        }
    }

    return(
        <>
            { colorError ? <p className="text-danger">{ colorError }</p>: null }
            { sizeError ? <p className="text-danger">{ sizeError }</p> : null }
            <form className="row my-3 justify-content-center" onSubmit = { handleSubmit }>
                <label htmlFor='size' className="col-2">Size</label>
                <input type="number" name="size" className="col-2" min="50" max="150" value={size} onChange={e => {
                    setSize(e.target.value)
                    setSizeError('')}
                }/>

                <label htmlFor="color" className="col-2">Color</label>
                <input type="color" name="color" className="col-3" value={color} onChange={ e => {
                    setColor(e.target.value)
                    setColorError('')}
                } />

                <input type="submit" className="col-2 ms-3" value="Add" />
            </form>
        </>
    )
}

export default Form