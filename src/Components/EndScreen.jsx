import React from 'react'
import '../Styles/EndScreen.css'
import { Link } from 'react-router-dom'


export default function EndScreen(){


    return(
        <div className='endScreenDiv'>
            <Link to='/'>
                <div className="divbuttontostart"></div>
            </Link>
        </div>
    )
}