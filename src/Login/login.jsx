import { authenticate } from './Loginservices';
import { useState } from 'react';
import FormInput from './forminput';
import Form from './Form';
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
    
    return(<div className="login">
        <Form  handleSubmit={handleSubmit} formInputChildren={[ <FormInput key={1} label="User ID"
        name="email"
        handleOnChange={handleOnChange}/>,
         <FormInput key={2} label="Password"
        name="password" type='password'
        handleOnChange={handleOnChange}/>]}  />
    </div>
    )
}
export default Login;