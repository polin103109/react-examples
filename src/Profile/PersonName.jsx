import React, { useContext } from "react"
import UseContext from "../context/UserContext"

const UserPortfoliolink = () => {
   const {firstname,lastname,url}= useContext(UseContext);
   return <a href={url}>{`Name: ${firstname} ${lastname}`}</a>
}

// export const PersonName = () =>{
//     const {firstname,lastname}=useContext(UseContext);
//     return (
//         <div>
//              <h1>{`Name: ${firstname} ${lastname}`}</h1>
//              <UserPortfoliolink firstname={firstname} lastname={lastname} />
//         </div>
//     )
// }
class PersonName extends React.Component{
 
  render(){
    const { firstname,lastname }=this.context;
    return (
             <div>
              <h1>{`Name: ${firstname} ${lastname}`}</h1>
                  <UserPortfoliolink firstname={firstname} lastname={lastname} />
                 </div>
         );
  }
}
PersonName.contextType= useContext;
export {PersonName};