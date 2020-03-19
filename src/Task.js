import React from 'react'
import './Task.css'

export default props => {

    const { task, editTask, deleteTask } = props
    const { id, name } = task

    return (

        <li>
            <div>
                {id}
            </div>:
            <div>
                {id} : {name}
            </div>
            <button onClick={() => deleteTask(id)}>Delete</button>
            <button onClick={() => editTask(id)}>Edit</button>
        </li>
    )
}