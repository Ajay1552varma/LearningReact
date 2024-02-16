import React from "react";

class Constructor extends React.Component{
    constructor(){
        //constructor will be called before even render
    // constructor is also a life cycle method and it will be called as soon as class is created
        super();
        console.log("This is Constructor");
    }
    render(){
        console.log("This is render");
        return(
            <div>
                <h1>Hello This is constructor</h1>
            </div>
        )
    }
}

export default Constructor