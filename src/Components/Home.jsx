import React from 'react'
import '../Styles/Home.css'
import { useState, useEffect} from 'react'
import {Medieval} from '../Data/Data'
import { Link } from 'react-router-dom'
import Logo from '../Media/logo.png'
import Card from '../Components/Card'
import BackPlaces from '../Media/dorsolugares.jpg'
import BackActions from '../Media/dorsoaccioness.jpg'
import BackCharacter from '../Media/dorsopersonajes.jpg'
import upperAction from '../Media/action.png'
import upperplace from '../Media/place.png'
import uppercharacter from '../Media/character.png'
import cincoseisLogo from '../Media/logo_5SEIS.png'
import Instructions from './Instructions'
import clickheretorevealthem from '../Media/cta_cartas_ENG.png'

export default function Home() {

    const [state, setState] = useState({
        randomCharacter: '',
        randomPlace: '',
        randomAction: '',
        randomCharacter2: '',
        randomPlace2: '',
        randomAction2: ''
    })

    let info

    useEffect(() => {
        getRandom()
    },[])

    function getRandom (){
        setState({
            randomCharacter: Medieval.characters[Math.floor(Math.random()*Medieval.characters.length)],
            randomPlace: Medieval.places[Math.floor(Math.random()*Medieval.places.length)],
            randomAction: Medieval.actions[Math.floor(Math.random()*Medieval.actions.length)],
            randomCharacter2: Medieval.characters[Math.floor(Math.random()*Medieval.characters.length)],
            randomPlace2: Medieval.places[Math.floor(Math.random()*Medieval.places.length)],
            randomAction2: Medieval.actions[Math.floor(Math.random()*Medieval.actions.length)]
        })
        let buttons = document.getElementsByClassName('addcartButton')
        let element = document.getElementsByClassName('flip-card2')
        for(let i = 0; i < buttons.length; i++){
            buttons[i].style.display = 'inline'
            element[i].style.display = 'none'
        }
        setTimeout(() => {
            info = document.getElementsByClassName('flip-card')
            localStorage.setItem('carta1', info[0].getElementsByClassName('h1cardname1')[0].innerText)
            localStorage.setItem('carta2', info[1].getElementsByClassName('h1cardname1')[0].innerText)
            localStorage.setItem('carta3', info[2].getElementsByClassName('h1cardname1')[0].innerText)
        },100)
        localStorage.removeItem('cartaExtra')
    }


    return (
        <div className='HomeDiv'>
                <Link to='/'>
                    <img alt='LogoTable' className='TitleDiv2' src={Logo}></img>
                </Link>
            <div className="divtextos">
                <img src={clickheretorevealthem} className='h1hazclickenlacarta'></img>
            </div>
            <div className="divbuttons">
                {/* <button onClick={() => getRandom()} className='btnNext'>Refrescar</button> */}
            </div>
            <div className='cardContainer'>
                {
                    state.randomPlace !== ''? <Card uppertext={upperplace} idCard='0' Back={BackPlaces} front2={state.randomPlace2.name} front={state.randomPlace.url}></Card> : <p></p>
                }
                {
                    state.randomCharacter !== ''? <Card uppertext={uppercharacter} idCard='1' Back={BackCharacter} front2={state.randomCharacter2.name} front={state.randomCharacter.url}></Card> : <p></p>
                }
                {
                    state.randomAction !== ''? <Card uppertext={upperAction} idCard='2' Back={BackActions} front2={state.randomAction2.name} front={state.randomAction.url}></Card> : <p></p>
                }
            </div>
            <div className="nextbuttondiv">
                <Link to='/contact'>
                    <button className='btnNext'></button>
                </Link>
            </div>
            <a target='blank' href='https://5seis.com' className='bottonpagoficialhome'>
                <img src={cincoseisLogo}></img>
            </a>
            <Instructions></Instructions>
        </div>
    )
}
