import React from "react";

class UnmountCheck extends React.Component{
    componentWillUnmount(){
        alert("Unmounted");
    }
    render(){
        return(
            <div>
                <h1>Checking The Unmount Page</h1>
            </div>
        )
    }
}
export default UnmountCheck;