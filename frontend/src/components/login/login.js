import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import './login.css'
import axios from 'axios'
const Login=({setUserhere})=>{
    const Navigate=useNavigate();

    const[user,setUser]=useState({
        email:"",
        password:"",
    });
    
  const  handleChange =(e)=>{
    const{name,value}=e.target;   // derefer name and value from input box and setUser according to it
    setUser(
        {
            ...user,   // use spread operator to copy older unchanged data 
            [name]:value    // set changed value 
        }
    )
  }
  const login=()=>{
    axios.post("http://localhost:5000/login",user)
    .then(res=>{
        alert(res.data.message)
        // console.log(res.data.user);
        setUserhere(res.data.user)
        Navigate("/")   // so that it go on home page again and show data this time
    })
  }
    return(
        <div className='login'>

            <h1>Login</h1>
            <input type="email" name ="email"value={user.email} onChange={handleChange}  placeholder='Enter Email'></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Enter Password'></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={()=>Navigate("/register")}>Register</div>
            
        </div> 
    )
    }
export default Login