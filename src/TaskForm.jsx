import { useState } from 'react'

export default function TaskForm({ createTask }) {

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
        <form className="box" onSubmit={handleSubmit} method="post">
            <div className="field">
                <label htmlFor="" className="label">Task Name</label>
                <div className="control">
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Write down your task"
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="" className="label">Description</label>
                <div className="control">
                    <textarea name="description-text" cols="30" rows="5"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Write down your description"
                    />
                </div>
            </div>
            <button>
                Save
            </button>

        </form >
    )
}