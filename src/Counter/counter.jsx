import { useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    console.log("rendering.....");
    function onIncrement(){
        console.log("clicked increment button");
       setCount(count+1);
       console.log('---->>',count)
       
    }
   
    return (
   
    <div className="counter-wrap">
         {console.log("rendered")};
        <h1>{`Counter App:${count}`}</h1>
        <button onClick={onIncrement}>increment</button>
        <p>Current Count:</p>
    </div>
    )
    
   
    
}
export default Counter;