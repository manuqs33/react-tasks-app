import { useState, useEffect } from 'react'
import './App.scss'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import Footer from './Footer'
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
    <>
      <section className='section'>
        <div className="container">
          <TaskForm createTask={createTask} />
          <TaskList tasks={tasks} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
