import { useEffect, useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    useEffect(()=>{
console.log("executing use effect");
    },
    );
    function onIncrement(){
      
    setCount(count+1);
    }
    
     console.log("rendering...............");
   return (
       <div className="counter-wrap">
        <h1>Counter App</h1>
        <button onClick={onIncrement}>increment</button>
        <p id="output">{`current count:${count}`}</p>
    </div>
    )
}
export default Counter;