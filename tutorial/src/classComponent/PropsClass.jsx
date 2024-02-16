import React from 'react'

class PropsClass extends React.Component{
    render(){
        console.log(this.props);
        return(   
            <div>
                 
                <h1>The Course is:{this.props.course}</h1>
                <h1>The Price is:{this.props.price}</h1>
            </div>
        )
    }
}
export default PropsClass