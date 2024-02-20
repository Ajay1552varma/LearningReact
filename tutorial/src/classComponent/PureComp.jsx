import React,{PureComponent} from "react";

class PureComp extends PureComponent{
    constructor(){
        super();

        this.state={
            count:1
        }
        this.updation=this.updation.bind(this);
    }
    updation(){
    this.setState({count:1})
    console.warn("clicked");
    }
    render(){
        console.warn("Check rerendring")
        return(
            <>
            {/* if we are updating the same value from previous then it will rerender again and again but if
            we will use PureComponent then it will not rerender  */}
                <h1>Pure Component In React Js {this.state.count}</h1>
                <button onClick={this.updation}>Update Count</button>
            </>
        )
    }
}

export default PureComp;
