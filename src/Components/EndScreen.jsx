import React from 'react'
import '../Styles/EndScreen.css'
import { Link } from 'react-router-dom'
import cincoseisLogo from '../Media/logo_5SEIS.png'


export default function EndScreen(){


    return(
        <div className='endScreenDiv'>
            <Link to='/'>
                <button className="buttonPlayAgain"></button>
            </Link>
            <a target='blank' href='https://5seis.com' className='boi'>
                <img src={cincoseisLogo}></img>
            </a>
        </div>
    )
}