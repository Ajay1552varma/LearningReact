import React, { useRef } from "react";

function UseRef(){
    let inputRef=useRef(null)

    function handleInput(){
        console.warn("Function called");
        inputRef.current.value="Ajay";
        inputRef.current.focus();
        //inputRef.current.style.color="red";
    }

    return(
        <>
            <h1>Learning All About UseRef</h1>
            <input type="text" value="" ref={inputRef}/>
            <button onClick={handleInput}>Get Value</button>
        </>
    )
}
export default UseRef;