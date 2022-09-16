import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState([])
  return (
    <div className="container py-3 px-5">
      <h1>To-Do List</h1>
      <Form 
        tasks={tasks}
        setTasks={setTasks}
      />
      { 
          tasks.map ( (todoItem, index) => (
              <Task key={ index } todoItem={todoItem} 
                tasks={tasks}
                setTasks={setTasks}
                index={index}
              />
          ))
      }
    </div>
  )
}

export default App;
