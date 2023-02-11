import React,{useState} from 'react'
import './register.css'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
const  Register=()=>{

    const Navigate = useNavigate();
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    });

  const  handleChange =(e)=>{
    const{name,value}=e.target;   // derefer name and value from input box and setUser according to it
    setUser(
        {
            ...user,   // use spread operator to copy older unchanged data 
            [name]:value    // set changed value z
        })}
        
    const register = () => {
             axios.post("http://localhost:5000/register",user)
            .then( res => {
                alert("Registeration Done")
                Navigate("/login")
            })
            .catch(err=>{
                alert(err.message)
               
            })
        
    }
    


    return(
        <div className='register'>
         <h1>Register</h1>
         <input type="text" name="name" value={user.name} onChange={handleChange} placeholder='Your Name'></input>
            <input type="email" name ="email"value={user.email} onChange={handleChange}  placeholder='Your Email'></input>
            <input type="password" name="password"value={user.password}  onChange={handleChange} placeholder='Your Password'></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder='Re-enter Password'></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=>Navigate("/login")}>Login</div>
            
            
        </div>
    )
    }
export default  Register