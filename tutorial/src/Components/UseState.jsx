import React, { useState } from "react";

function UseState(){
    const[name,setName]=useState("Ajay");
    const[counter,setCounter]=useState(0);
    function IncreaseCounter(){
        setCounter(counter+1);
    }
    return(
        <div>
            <h1>My name is: {name}</h1>
            <h1>{counter}</h1>
            <button onClick={IncreaseCounter}>Counter</button>
            <button onClick={()=>setName("Mrudula")}>Update Name</button>
        </div>
    )
}

export default UseState;