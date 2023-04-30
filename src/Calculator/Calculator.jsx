import "./Calculator.css"
 function Operation ({label}){
return <button>{label}</button>
    }
function Calculator (){
   const operations =['+','-','*','/']
    return (
     <div className="calculator">
        <h1>Calculator</h1>
        <div className="input">
            <input type='number'></input>
            <input type= 'number'></input>
        </div>
        <div className="operations">
          {operations.map((operation,index) => (<Operation key={index} label={operation}/>))}
        </div>
        <div>
          <h3> result:</h3> 
        </div>
     </div>
    )
}
export default Calculator;