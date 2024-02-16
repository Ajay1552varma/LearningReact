import React from "react";

class CompDidUpdate extends React.Component{
    // we will call API in component did mount because till that time all the thing will be ready like
    // dom and html
    // Render will be called first then component did mount
    
    constructor(){
        super()
       console.log("Constructor");
       this.state={
        name:"Ajay"
       }
    }

    componentDidUpdate(){
        console.log("This is component did Update");
    }

    componentDidMount(){
        console.log("Component Did Mount");
    }

    render(){
        console.log("Render");
        return(
            <div>
                <h1>This is All About ComponentDIDUpdate</h1>
                <button onClick={()=>{this.setState({name:"vijay"})}}>Update Name</button>
            </div>
        )
    }
}
export default CompDidUpdate;