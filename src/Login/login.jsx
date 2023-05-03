import { useState } from 'react';
import './login.css';

function Login (){
    const[credential,setCredential]=useState({
        email:'',
        password:'',
    })
    const handleOnChange =(event) =>{
          if(event.target.name==='email'){
            setCredential({...credential,email:event.target.value})
          }
         else if(event.target.name==='password'){
            setCredential({...credential,password:event.target.value})
          }
    }
    
    return <div className="login">
     <form className="loginForm">
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
           
            <input type='submit' value='Login' />
        </div>
     </form>
    </div>
}
export default Login;