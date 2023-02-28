import { useState } from 'react'

export default function TaskForm(props) {

    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            title: title
        }
        props.createTask(newTask)
    }

    return (
        <form onSubmit={handleSubmit} method="post">
            <input type="text" onChange={(e) => setTitle(e.target.value)}
            placeholder="Write down your task" />
            <button>
                Save
            </button>
        </form>
    )
}