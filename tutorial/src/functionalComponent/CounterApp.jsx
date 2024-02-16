import {useState} from 'react'

function CounterApp(){
    const [counter,updateCounter]=useState(0);
    function IncreaseCount(){
        updateCounter(counter+1);
    }
    function DecreaseCount(){
        updateCounter(counter+-1);
    }
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={IncreaseCount}>IncreaseCount</button>
            <button onClick={DecreaseCount}>DecreaseCount</button>
        </div>
    )
}

export default CounterApp;