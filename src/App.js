import React from 'react';
import { useEffect, useState } from 'react'
import { firestore } from './index'


const App = () => {

  const [name, setName] = useState('')

  const [task, setTask] = useState([

    { id: 1, name: "do homewoke" },
    { id: 2, name: "Write Nodejs" }

  ])


  useEffect(() => {

    retriveData()

  }, [])


  const retriveData = () => {

    firestore.collection("tasks").onSnapshot(snapshot => {

      console.log(snapshot);

      let myTask = snapshot.docs.map(d => {
        const { id, name } = d.data()
        console.log(id, name)
        return { id, name }
      })

      setTask(myTask)

    })
  }

  const renderTask = () => {
    console.log(task)
    if (task && task.length) {
      return task.map((task, index) => {
        return (

          <li key={index}> {task.id} : {task.name}
          <button onClick={() => deleteTask(task.id)}>Del</button>
          </li>
         )
      })

    }
    else {
      return <li>No task</li>

    
    }
  }


  const addTask = () => {

    let id = (task.length === 0) ? 1 : task[task.length-1].id + 1
    firestore.collection("tasks").doc(id+'').set({ id, name})

  }

  const deleteTask = (id) => {

    firestore.collection("tasks").doc(id+'').delete()

  

  }

  return (

    <div>
      <h1>To do</h1>
      <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      <button onClick={addTask}>ADD</button>
      <ul style={{ display: 'flex', listStyle: 'none' }}>{renderTask()}</ul>
    </div>

  )

}

export default App;
