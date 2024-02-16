import React from "react";

class RenderLifeCycle extends React.Component{
    // we can take props in constructor as well 
    constructor(){
        super()
        this.state={
            email:"ajay@gmail.com"
        }
    }
    render(){
        console.log(`This is render ${this.state.email}`);
        return(
            <div>
                <h1>This is a render life cycle method</h1>
                <button onClick={()=>{this.setState({email:"vivek@gmail.com"})}}>Update Email</button>
            </div>
        )
    }
}
export default RenderLifeCycle;