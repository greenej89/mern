import {useState} from 'react'

const Form = ({tasks, setTasks}) => {
    const [task, setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(task) {
            const todoItem = {
                task: task,
                isComplete: false
            }
            setTasks([...tasks, todoItem])
            setTask("")
        }
    }
    return(
        <form  className="row" onSubmit={ handleSubmit }>
            <div className="col-8 d-flex">
                <input 
                    type="text" className="bg-light border-info form-control"
                    onChange={ (e) => setTask(e.target.value) }
                    value={task}
                />
                <input type="submit" value="Add Task" className="btn btn-primary ms-3"/>
            </div>
        </form>
    )
}
export default Form