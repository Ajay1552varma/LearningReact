import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);
    const multiCountMemo= useMemo(function multicount(){
      console.warn("MulticountMemo");
      return count*5;
    },[count])

  return (
    <div>

    {/* multicount was updating on the click of updateitem button also which should not happen that's why 
    here we are using usememo to avoid now it will only update on click of Updatecount button. */}

        <h1>This is UseMemo tutorial</h1>
        <h2>Count is:{count}</h2>
        <h2>Item is:{item}</h2>
        <h2>Multicount is:{multiCountMemo}</h2>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setItem(item*10)}>Update Item</button>
    </div>
  )
}

export default UseMemo