import React from "react";
import UnmountCheck from "./UnmountCheck";


class CompWillUnMount extends React.Component{

    constructor(){
        super();
        this.state={
            show:false
        }
    }
   
    render(){
        return(
            <div>
                <h1>Component Will UnMount</h1>
                {
                    this.state.show ? <UnmountCheck/> :null
                }
                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>
            </div>
        )
    }
}
export default CompWillUnMount;