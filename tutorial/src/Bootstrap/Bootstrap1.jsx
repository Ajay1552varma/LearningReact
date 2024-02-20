import React from 'react'
import Button from 'react-bootstrap/Button';

function Bootstrap1() {
  return (
    <div>
        <h1>Learning Bootstrap</h1>
        <Button variant='primary' onClick={()=>alert("Hello")}>This Is Button</Button>
        <Button variant='secondary' onClick={()=>alert("how")}>This Is Button</Button>
        <Button variant='success' onClick={()=>alert("are you")}>This Is Button</Button>
    </div>
  )
}

export default Bootstrap1