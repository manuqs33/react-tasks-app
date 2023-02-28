import { useState } from 'react'

export default function TaskForm({createTask}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            description
        })
    }

    return (
        <form onSubmit={handleSubmit} method="post">
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Write down your task"
            />
            <textarea name="description-text" cols="20" rows="5"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write down your description"
            />
            <button>
                Save
            </button>
        </form>
    )
}