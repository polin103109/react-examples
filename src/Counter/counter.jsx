import { useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    function onIncrement(){
        console.log("updating count",new Date());
    setCount(count+1);
    // document.getElementById('output').innerText=`current count:${count}`;
    // count++;
    console.log(count, new Date());
     }
   return (
       <div className="counter-wrap">
        {console.log('rendering', new Date())}
        <h1>Counter App</h1>
        <button onClick={onIncrement}>increment</button>
        <p id="output">{`current count:${count}`}</p>
    </div>
    )
}
export default Counter;