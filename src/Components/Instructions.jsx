import React from "react"
import '../Styles/Instructions.css'
import { useState } from "react"
import ImgButton from '../Media/signo_exclamacion_OFF.png'
import icono1 from '../Media/instrucciones_icono1.png'
import icono2 from '../Media/instrucciones_icono2.png'
import icono3 from '../Media/instrucciones_icono3.png'
import leftarrow from '../Media/boton_izq_ON.png'
import rigtarrow from '../Media/boton_der_ON.png'


export default function Instructions(){

    const [modal, setModal] = useState(false)

    function toggleModal(){
        setModal(!modal)
        setState(1)
    }

    const [state, setState] = useState(1)
    
    function nextClausule(){
        if(state === 1){
            document.getElementById('landing2div2').style.display = 'none'
            document.getElementById('landing3div2').style.display = 'flex'
            setState(state + 1)
        }else if(state === 2){
            document.getElementById('landing3div2').style.display = 'none'
            document.getElementById('landing4div2').style.display = 'flex'
            setState(state + 1)
        }   
    }

    function lastClausule(){
        if(state === 2){
            document.getElementById('landing2div2').style.display = 'flex'
            document.getElementById('landing3div2').style.display = 'none'
            setState(state - 1)
        }else if(state === 3){
            document.getElementById('landing3div2').style.display = 'flex'
            document.getElementById('landing4div2').style.display = 'none'
            setState(state - 1)
        }   
    }


    return(
        <div>
            <img onClick={e => {toggleModal()}} className='imgsignoexclamacionmodal' src={ImgButton}></img>

            {
                modal && (
                    <div className="modal">
                <div onClick={() => {toggleModal()}} className="overlay"></div>
                <div className="modal-content">
                    <div id='landing2div2' className="divinstruccionmodal1">
                        <img className='imgiconoinstrucciones' src={icono1}></img>
                        <h3>This game is made to let your imagination <br></br>fly and have good time with your friends!</h3>
                        <div className="divarrowsmodal">     
                            <button disabled={state === 1}  className='imgleftarrow' onClick={() => {lastClausule()}}></button>
                            <button className='imgrightarrow' onClick={() => {nextClausule()}}></button>
                        </div>
                    </div>
                    <div id='landing3div2' className="divinstruccionmodal2">
                        <img className='imgiconoinstrucciones' src={icono2}></img>
                        <h3>3 cards will be presented, each one from <br></br>a different category: place, character<br></br> and action</h3>
                        <div className="divarrowsmodal">     
                        <button className='imgleftarrow' onClick={() => {lastClausule()}}></button>
                            <button className='imgrightarrow' onClick={() => {nextClausule()}}></button>
                        </div>
                    </div>
                    <div id='landing4div2' className="divinstruccionmodal3">
                        <img className='imgiconoinstrucciones' src={icono3}></img>
                        <h3>the cards can be interpreted in the way<br></br>that each player considers the best to<br></br>create their story.</h3>
                        <div className="divarrowsmodal">     
                        <button   className='imgleftarrow' onClick={() => {lastClausule()}}></button>
                        <button disabled={state === 3} className='imgrightarrow' onClick={() => {nextClausule()}}></button>
                        </div>
                    </div>
                    <button onClick={() => {toggleModal()}} className="closemodal"></button>
                </div>
            </div>)
            }
        </div>
    )
}