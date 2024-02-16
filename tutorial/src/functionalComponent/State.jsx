import {useState} from 'react'

function State() {
    const [data,updateData]=useState("Ajay Varma");
    function updateName(){
        updateData("Suraj Verma");
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={updateName}>Click</button>
    </div>
  )
}

export default State