import {useState} from 'react'

const Task = ({todoItem, index, tasks, setTasks}) => {
    const {task, isComplete} = todoItem
    const [isChecked, setIsChecked] = useState(isComplete)

    const handleCheckbox = (e) => {
        tasks[index].isComplete = !tasks[index].isComplete
        setIsChecked(tasks[index].isComplete)
    }

    const deleteTask = (e) => {
        e.preventDefault()
        setTasks(tasks.filter( (item, i) => i != index ))
    }

    return (
        <form className="row my-3" >
            <hr className="col-8"></hr>
            <div className="form-check">
                <input type="checkbox" className="form-check-input me-3"
                    checked= {isComplete} 
                    onChange= { handleCheckbox }
                />
                <label className={ "form-check-label col-7" + (isComplete? " text-decoration-line-through" : "") }> 
                    {task} 
                </label>
                <button className=" btn btn-danger" onClick={ deleteTask }>x</button>
            </div>
        </form>
    )
}

export default Task