import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import { firestore } from './index'


const App = () => {

  const [task, setTask] = useState([

    { id: 1, name: "do homewoke" },
    { id: 2, name: "Write Nodejs" }

  ])

  const [name, setName] = useState('')

  const retriveData = () => {

    firestore.collection("task".onSnapshotS((snapshot) => {

      console.log(snapshot);
    let myTask =  snapshot.docs.map( d => {
        const {id, name} = d.data()
        console.log(id, name)
        return {id, name}
      })

      setTask(myTask)

    }))
  }


  useEffect(() => {

  
    retriveData()

  }, [])

  const renderTask = () => {

    if (task && task.length != 0) {

      return (
        task.map((task, index) => {
          <li key={index}>{task.id} : {task.name}</li>
        })
      )
    }
  else {
      return (

        <li>No task</li>
      )
    }
  }


  const addTask = () => {

    let id = task[task.length-1].id+1;
     firestore.collection("tasks").doc(id +' ').set({id, name})

  }


return (

  <div>
    <h1>To do</h1>
    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
    <button onClick={addTask}>SUB</button>
    <ul>{renderTask()}</ul>
  </div>

)

}

export default App;
