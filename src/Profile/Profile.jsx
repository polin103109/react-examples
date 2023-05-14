import { useContext } from "react";
import { PersonName } from "./PersonName";
import UseContext from "../context/UserContext";

const PersonAge =()=> {
    const{age}=useContext(UseContext);

return (
    <div>
<h2>Age: {age}</h2>
</div>
);
}  



export default function Profile (){
    return <div>
       <PersonName />
       <PersonAge />
    </div>
}