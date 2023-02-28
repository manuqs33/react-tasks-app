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
    const newTask = {
      id: tasks.length,
      title: task.title,
      description: task.description
    }
    const newTasks = [...tasks, newTask]
    setTasks(newTasks)
  }

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
