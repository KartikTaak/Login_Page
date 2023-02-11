import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './homepage.css'

const Homepage=()=>{
    const Navigate = useNavigate();
    return(
        <div className='homepage'>
            <h2>
            Wellcome to Homepage
            </h2>
            <div className='button' onClick={()=>Navigate("/login")}>
                LOGOUT
            </div>
        </div>
    )
    }
export default  Homepage