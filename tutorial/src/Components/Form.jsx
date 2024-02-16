import React, { useState } from 'react'

function Form(){

    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [car,setCar]=useState("");

    function nameFun(e){
        setName(e.target.value);
    }
    function carFun(e){
        setCar(e.target.value);
    }
    function tncFun(e){
        setTnc(e.target.value);
    }

    function getFormData(e){
        console.log(name,tnc,car);
        e.preventDefault();
       
    }
    return (
        <div>
            <h1>Learning All About Forms</h1>
           <form onSubmit={getFormData}>
           <input onChange={nameFun} type="text" placeholder='Enter Your Name'/><br /><br />
            <select onChange={carFun}>
                <option>Select Options</option>
                <option>BMW</option>
                <option>Innova</option>
                <option>Tata Punch</option>
            </select>
            <br /><br />
            <input onChange={tncFun} type="checkbox" /><span>Accept terms and condition</span>
            <br /><br />
            <button type='submit'>Submit</button>
           </form>
        </div>
    )
}

export default Form;