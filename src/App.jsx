import { useImperativeHandle, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data } from './tasks'


function App() {

  const [tasks, setTasks] = useState()

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task) {
    const newtasks = [...tasks, task]
    setTasks(newtasks)
  }

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
