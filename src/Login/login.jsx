import { authenticate } from './Loginservices';
import { useState } from 'react';
import './login.css';
import FormInput from './forminput';

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
        <FormInput label="User ID"
        name="email"
        type="email"
        handleOnChange={handleOnChange}/>
         <FormInput label="Password"
        name="password"
        type="password"
        handleOnChange={handleOnChange}/>
        <div className="formInput">
    
    <input  type='submit' value='Log In' />
</div>
     </form>
    </div>
}
export default Login;