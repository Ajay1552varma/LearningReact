import React from "react";

class CompDidMeth extends React.Component{
    // we will call API in component did mount because till that time all the thing will be ready like
    // dom and html
    // Render will be called first then component did mount
    
    constructor(){
        super()
       console.log("Constructor");
    }

    componentDidMount(){
        console.log("ComponentDidMount");
    }

    render(){
        console.log("Render");
        return(
            <div>
                <h1>This is All About ComponentDIDMount</h1>
            </div>
        )
    }
}
export default CompDidMeth;