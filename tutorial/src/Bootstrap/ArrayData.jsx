import React from 'react'
import Table from 'react-bootstrap/Table'

function ArrayData() {
    const arr=['ajau','vijay','sanjay','suraj','vivek'];


    const UserDetails=[
        {
            id:1,
            name:"ajay Varma",
            age:10,
            email:"ajay@gmail.com"
        },
        {
            id:2,
            name:"peter Varma",
            age:19,
            email:"peter@gmail.com"
        },
        {
            id:3,
            name:"sanjay Varma",
            age:30,
            email:"sanjay@gmail.com"
        },

    ]

    arr.map((item)=>{
        console.log("My name is:",item);
    })
  return (
    <div>
         {/* we use map function over for loop because map support return statement but for not. */}
        <h1>Playing With Array</h1>
        <Table striped bordered hover variant='dark'>
            
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
    {
        UserDetails.map((data,index)=>
            
                <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                </tr>  
        )
    }
     </tbody>
     </Table>

    </div>
  )
}

export default ArrayData