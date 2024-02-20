import React, { useEffect, useState } from "react";

function UseEffectComp(){

    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("UseEffect");
    },[])

    function updateState(){
        setCount(count+1);
    }
    return(
        <div>
            <h1>Hello from UseEffect {count}</h1>
            <button onClick={updateState}>Update Counter</button>
        </div>
    )
}
export default UseEffectComp;