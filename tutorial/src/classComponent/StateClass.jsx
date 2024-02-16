import React from 'react'

class StateClass extends React.Component{
    
    constructor(){
        super();
        this.state={
            //data:"Ajay Varma"
            data:1
        }
    }
    updateName(){
        //this.setState({data:"Suraj Varma"})
        this.setState({data:this.state.data+1});
    }
    render(){
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.updateName()}>Click</button>
            </div>
        )
    }
}

export default StateClass;