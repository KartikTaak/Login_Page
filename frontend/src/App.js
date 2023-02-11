import Homepage from './components/homepage/homepage'
import { useState } from 'react'
import {BrowserRouter,Routes,Route}from 'react-router-dom' 
import Register from './components/register/register'
import Login from './components/login/login'
import './App.css'
import axios from 'axios'

function App() {
  const [userhere,setUserhere]=useState({});   // blankobject 
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
<Route exact path="/" element={userhere && userhere._id ? <Homepage  /> : <Login setUserhere={setUserhere} /> } />  
<Route path="/login"  element={<Login setUserhere={setUserhere}/>} />  
<Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
