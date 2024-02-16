import React from "react";

function FunAsProps(props){
    return(
        <div>
            <h1>Passing Function as props from App.js</h1>
            <button onClick={props.data}>Click Button to See Data</button>
        </div>
    )
}

export default FunAsProps