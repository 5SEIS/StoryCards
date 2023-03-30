import React from 'react'
import '../Styles/Landing.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Media/logo.png'
import cincoseisLogo from '../Media/logo_5SEIS.png'
import icono1 from '../Media/instrucciones_icono1.png'
import icono2 from '../Media/instrucciones_icono2.png'
import icono3 from '../Media/instrucciones_icono3.png'

export default function Landing() {

    const [state, setState] = useState(1)

    
    useEffect(() => {
        setState(1)
        setTimeout(() => {
            document.getElementById('landing1div').style.display = 'none'
            document.getElementById('landing2div').style.display = 'flex'
        },3000)
    },[])


    function nextClausule(){
        if(state === 1){
            document.getElementById('landing2div').style.display = 'none'
            document.getElementById('landing3div').style.display = 'flex'
            setState(state + 1)
        }else if(state === 2){
            document.getElementById('landing3div').style.display = 'none'
            document.getElementById('landing4div').style.display = 'flex'
            setState(state + 1)
        }   
    }


    return (
        <div className='LandingDiv'>
            <div id='landing1div' className="landingdivintro">
                <img  className='TitleDivintro' alt='Logo' src={Logo}></img>
            </div>
            <div id='landing2div' className="divinstruccion1">
                <img  className='TitleDivintrodivs' alt='Logo' src={Logo}></img>
                <img src={icono1} style={{width: '18vh'}}></img>
                <h3>This game is made to let your imagination fly and have good time with your friends!</h3>
                <button className='btnNextLanding' onClick={() => {nextClausule()}}></button>
            </div>
            <div id='landing3div' className="divinstruccion2">
                <img  className='TitleDivintrodivs' alt='Logo' src={Logo}></img>
                <img src={icono2} style={{width: '18vh'}}></img>
                <h3>3 cards will be presented, each one from a different category: place, character and action.</h3>
                <button className='btnNextLanding' onClick={() => {nextClausule()}}></button>
            </div>
            <div id='landing4div' className="divinstruccion3">
                <img  className='TitleDivintrodivs' alt='Logo' src={Logo}></img>
                <img src={icono3} style={{width: '18vh'}}></img>
                <h3>the cards can be interpreted in the way that each player considers the best to create their story.</h3>
                <h3 className='letyourimaginationrun'>Let your imagination run wild!</h3>
                <Link to='/home'>
                    <button className='btnBegin' onClick={() => {nextClausule()}}></button>
                </Link>
            </div>
            {/* <div className='DescriptionDiv'>
                <h3 style={{textAlign: 'justify'}}>¡This game is made to let your imagination run wild and have a good time with your friends!<br></br>
                <br></br> 
                Will be presented to you <ins>3 cards</ins>, each from a different category: <ins>Place, Character and Action.</ins><br></br>
                <br></br>
                The cards can be interpreted in the way that each player considers the best to create stories.
                </h3>
            </div>
            <h1 className='DivImaginacion'>Let your imagination run wild!</h1>
            <Link to='/home'>
                <button className='btnIniciar'>Start</button>
            </Link> */}
            <a target='blank' href='https://5seis.com' className='bottonpagoficialanding'>
                <img src={cincoseisLogo}></img>
            </a>
        </div>      
    )
}
