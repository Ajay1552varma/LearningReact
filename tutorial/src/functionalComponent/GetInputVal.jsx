import React,{useState} from 'react'

function GetInputVal(){
    const [data,setData]=useState();
    const [print,setPrint]=useState(false);
    function getData(e){
        console.log(e.target.value);
        setData(e.target.value)
    }
    return(
        <div>
           <h1>Write in in inputbox then click print to render the value</h1>
            {print?<h1>{data}</h1>:null}
            {/* <h1>{data}</h1> */}
            <input type="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)}>Print</button>
        </div>
    )
}
export default GetInputVal;