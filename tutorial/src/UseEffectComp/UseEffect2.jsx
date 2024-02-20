import React, { useEffect, useState } from 'react'

function UseEffect2() {
  const[data,setData]=useState(10);
  const[count,setCount]=useState(1);
  useEffect(()=>{
    console.log("UseEffect Called for Data");
  },[data])
  useEffect(()=>{
    console.log("UseEffect Called for Count");
  },[count])
  return (
    <div>
        <h1>UseEffect Practice</h1>
        <h1>Data {data}</h1>
        <h1>Count {count}</h1>
        <button onClick={()=>setData(data+1)}>Update Data</button>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
    </div>
  )
}

export default UseEffect2