import { useEffect, useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    const [clicked,setClicked] = useState(0);
    useEffect(()=>{
console.log("executing use effect 1");
document.title=`Current count:${count}`;
    },[count]
    );
    useEffect(()=>{
console.log("executing use effect 2");
     if(clicked>=10 && count>=10){
        alert(`you have clicked ${clicked}times`)
     }
    },[clicked,count]
    );
    function onIncrement(){
      
    setCount(count+1);
    setClicked((clicked)=> clicked+1);
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