import React, {useState } from 'react'

function ShowHide(){
    const [hide,setHide]=useState(true);
    return(
        <div>
            {
                hide ? <h1>Hello How are you</h1>:null
            }
            {/* <button onClick={()=>setHide(false)}>Hide</button>
            <button onClick={()=>setHide(true)}>Show</button> */}

            <button onClick={()=>setHide(!hide)}>Toggle</button>
        </div>
    )
}

export default ShowHide;