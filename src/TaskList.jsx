import {tasks as data} from './tasks'

function TaskList(props) {

  return (
    <div>
      {props.tasks.map(task => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <h2>{task.description}</h2>
        </div>
      ))}
    </div>
  )
}
export default TaskList

