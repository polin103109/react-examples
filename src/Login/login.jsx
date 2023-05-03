import { authenticate } from './Loginservices';
import { useState } from 'react';
import './login.css';

function Login (){
    const[credential,setCredential]=useState({
        email:'',
        password:'',
    })
    const handleOnChange =(event) =>{
         const update = {
            [event.target.name] : event.target.value,
         };
         setCredential({...credential,...update})
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
       
        try{
            //redirect
            authenticate(credential);
        }
        catch(err){
            alert(err.message);
        }
       
    }
    
    return <div className="login">
     <form className="loginForm" onSubmit={handleSubmit} >
        <div className="formInput">
            <label>
                User ID
            </label>
            <input name='email' type='email' onChange={handleOnChange} />
        </div>
        <div className="formInput">
            <label>
                Password
            </label>
            <input name='password' type='password' />
        </div>
        <div className="formInput">
           
            <input type='submit' value='Login'  />
        </div>
     </form>
    </div>
}
export default Login;