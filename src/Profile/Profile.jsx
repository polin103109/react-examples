import { PersonName } from "./PersonName";

const PersonAge = ({age}) =>  <h2>Age: {age}</h2>;



export default function Profile ({user}){
    return <div>
       <PersonName firstname={user.firstname} lastname={user.lastname} url={user.url}/>
       <PersonAge age={user.age}/>
    </div>
}