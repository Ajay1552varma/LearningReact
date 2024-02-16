import React from 'react'

function Props(props) {
    console.log(props.name);
  return (
    <div>
        <h1>Learning Props {props.name}</h1>
        <h1>My email id through props is {props.email}</h1>
    </div>
  )
}

export default Props