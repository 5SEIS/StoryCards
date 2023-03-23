import React from 'react'
import '../Styles/Card.css'
import { useState } from 'react'


export default function Card({front, Back, uppertext}) {

  /* const apear = (e) => {
    e.preventDefault()
    let element = document.getElementsByClassName('flip-card2')
    localStorage.setItem('cartaExtra', element[idCard].getElementsByClassName('h1cardname2')[0].innerHTML)
    element[idCard].style.display = ''
    let buttons = document.getElementsByClassName('addcartButton')
    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.display = 'none'
    }
  }  */
  const [clicked, setClicked] = useState();

  function MyComponent() {
    setClicked('rotateY(180deg)')
  }

    return (
    <div className='generaldivcard'>
      <img className='uppertextcss' src={uppertext}></img>
      <div className='flip-card'>
        <div onClick={MyComponent} style={{transform: clicked}} className="flip-card-inner">
          <div className="flip-card-front">
            <img className='cardimgback' alt='tarotcartita' src={Back}></img>
          </div>
          <div className="flip-card-back">
            <img className='cardimg' alt='tarotcartita' src={front}></img>
            <h1 className='h1cardname1' style={{color: 'black'}}>{front}</h1>
          </div>
        </div>
      </div>
    </div>
    )
}
