import React from 'react'
import '../Styles/ContactUs.css'
import Logo from '../Media/logo.png'
import TextoOn from '../Media/icono_texto_on.png'
import TextoOff from '../Media/icono_texto_off.png'
import ImagenOn from '../Media/icono_imagen_on.png'
import ImagenOff from '../Media/icono_imagen_off.png'
import sucessfulyuploaded from '../Media/upload_sucessfully.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import InfoSender from './InfoSender'
import cincoseisLogo from '../Media/logo_5SEIS.png'

export default function ContactUs() {   

    let carta1 = localStorage.getItem('carta1')
    let carta2 = localStorage.getItem('carta2')
    let carta3 = localStorage.getItem('carta3')
    let cartas = [carta1, carta2, carta3]

    const [state, setState] = useState(0)

    const [data, setData] = useState({
        userName: '',
        userAccount: '@'
    })

    const union = () => {
        swap();
    }

    function handleOnChange1(e){
        e.preventDefault()
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    function handleOnChange2(e){
        e.preventDefault()
        setData({
            ...data,
            [e.target.name] : e.target.value
        })

    }

 const swap = () => {
        if(state !== 0){
            document.getElementsByClassName('btnNextContactUs')[0].style.display = 'none'
            document.getElementsByClassName('bottonpagoficialinfo')[0].style.display = 'none'
            document.getElementsByClassName('textinfosender')[0].style.display = 'inline'
            document.getElementsByClassName('divinputs')[0].style.display = 'none'
            document.getElementsByClassName('howgonnatell')[0].style.display = 'none'
            document.getElementsByClassName('buttonImgDiv')[0].style.display = 'none'
        }
    }
 
    return (
        <div id='contactusdivid' className='contactUsDiv'>
            <div className='divcardsend'>
                <Link to='/'>
                    <img className='TitleImgend' alt='Logo' src={Logo}></img>
                </Link>
                <div className='enddivcardcontainer'>
                    {
                        cartas.map((e) => {
                            return(
                                <img className='endcardImg' src={e}></img>
                            )
                        })
                    }
                </div>
            </div>
            <div className="infoenviadapopup" id='144223'>
                <img className='infoenviadapopupImg' src={sucessfulyuploaded}></img>
            </div>
            <div className='sendinfodivend'>
                <h1 className='tellyourstory'>Time to tell your story!</h1>
                <div className='divinputs'>
                    <input name='userName' maxLength="50" onChange={e => handleOnChange1(e)} id='inputinfofullnameid' className='inputInfo' type='text' placeholder='Full Name*'/>   
                    <input name='userAccount' maxLength="50" onChange={e => handleOnChange2(e)} className='inputInfo' type='text' /* value={data.userAccount} */ placeholder='Instagram user (optional)'/>   
                </div>
                <p className='howgonnatell'>How are you going to tell your story?</p>
                <div className='buttonImgDiv'>
                    <img src={state === 1? ImagenOn: ImagenOff} onClick={() => setState(1)} alt="imagen" className="imgdatabutton" />
                    <img src={state === 2? TextoOn: TextoOff} onClick={() => setState(2)} alt="texto" className="imgdatabutton" />
                </div>
                <div className='textinfosender'>
                    {
                        <InfoSender userName={data.userName} userAccount={data.userAccount} number={state}></InfoSender>
                    }
                </div>
                <div>
                    <button disabled={state === 0 || data.userName === ''} className='btnNextContactUs' onClick={union} ></button>
                </div>
            </div>
            <a target='blank' href='https://5seis.com' className='bottonpagoficialinfo'>
                <img src={cincoseisLogo}></img>
            </a>
        </div>
    )
}
