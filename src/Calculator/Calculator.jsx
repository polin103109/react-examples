import { useState } from "react"
import "./Calculator.css"
const OPERATIONS =['+','-','*','/']

function Operation ({label,handleOnclick}){
   return <button onClick={handleOnclick}>{label}</button>
    }

function Calculator (){
    const[result,setResult] = useState();
    const[numbers,setNumbers] = useState([0,0]);
  
    function handleOnChange(value,index){
        const newNumbers=[...numbers];
        newNumbers[index] = parseInt(value);
        setNumbers(newNumbers);
        }
    function handleOperations(operationType){
      switch(operationType){
        case '+':
            setResult(numbers[0]+numbers[1]);
            break;
            case '-':
                setResult(numbers[0]-numbers[1]);
                break;
                case '*':
                    setResult(numbers[0]*numbers[1]);
                    break;
                    case '/':
                        setResult(numbers[0]/numbers[1]);
                        break;
            default:
                break;
      }
      
    }
 return (
     <div className="calculator">
        <h1>Calculator</h1>
        <div className="input">
        {[0,1].map((id) => (
            <input key={id} type="number"  onChange={(e) => handleOnChange(e.target.value,id)}/>))}
            </div>
        <div className="operations">
         {OPERATIONS.map((operation,index) => (
            <Operation key={index} label={operation} handleOnclick={()=>handleOperations(operation) }/>))
         }
        </div>
        <div>
          <h3> result:{result}</h3> 
        </div>
     </div>
    )
}
export default Calculator;