import React, { useState } from "react";

function Cond_rendering(){
    //Instead of true we can write 1 then the condition will we loggedIn==1
    const [loggedIn,setLoggedin]=useState(true); 
    return(
        <div>
            <h1>Conditional Rendring</h1>
            {loggedIn? <h2>Yes user is logged In</h2>:<h2>User is not logged In</h2>}
        </div>
    )
}

export default Cond_rendering;