import '../Styles/infoSender.css'
import React from 'react'
import admiracion from '../Media/signo_exclamacion.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {getFirestore, setDoc, doc} from 'firebase/firestore'
import {ref, uploadBytes, getStorage} from 'firebase/storage'
import app from '../Data/FireBase';
import checkImage from '../Media/upload_check.png'



export default function InfoSender({number, userName, userAccount}) {

    const db = getFirestore(app)

    const ImgDb = getStorage(app)

    const navigate = useNavigate()

    const [state, setState] = useState({
        story: ''
    })

    const [file, setFile] = useState(null)

    function handleOnChange(e){
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function travelToEnd(){
        navigate('/final')
    }

    function yaNoseQueNombrePoner(e){
        e.preventDefault()
        document.getElementById('inputfile').click()
    }

    function goBack(){
        document.getElementsByClassName('btnNextContactUs')[0].style.display = 'inline'
        document.getElementsByClassName('bottonpagoficialinfo')[0].style.display = 'inline'
        document.getElementsByClassName('textinfosender')[0].style.display = 'none'
        document.getElementsByClassName('divinputs')[0].style.display = 'flex'
        document.getElementsByClassName('howgonnatell')[0].style.display = 'inline'
        document.getElementsByClassName('buttonImgDiv')[0].style.display = 'flex'
    }

    async function sendData(coleccion){
        await setDoc(doc(coleccion, 'storyCardsUsersData',userName), {
            Story: state.story,
            userAccount: userAccount,
            userName: userName
        })
        try{
            document.getElementById('144223').style.display='inline'
            setTimeout(() => {
                document.getElementById('144223').style.display='none'
                travelToEnd()
            },2000)
        }catch{
            alert('Error')
        }
        console.log(userAccount)
    }

    const MAXIMO_TAMANIO_BYTES = 5000000;

    async function sendImage(){
        const imgRef = ref(ImgDb, `images/${file.name + userName}`)
        if(file.size > MAXIMO_TAMANIO_BYTES){
            const tamanioEnMb = MAXIMO_TAMANIO_BYTES / 1000000;
            alert(`El tamaño máximo es ${tamanioEnMb} MB`);
            // Limpiar
            setFile(null);
        }else{
            uploadBytes(imgRef, file).then(() => {
                document.getElementById('144223').style.display='inline'
                setTimeout(() => {
                    document.getElementById('144223').style.display='none'
                    travelToEnd()
                },2000)
            })
        }

    }

    /* function renderizarImagen() {
        const fileInput = document.getElementById("inputfile");
        const file = fileInput.files[0];
        const imageObjectURL = URL.createObjectURL(file);

        const image = new Image();
        image.src = imageObjectURL;
            image.onload = function() {
            document.getElementById("image-container").appendChild(checkImage);
        }
    } */

    

    if(number === 2){
        return(
            <div className='generalDivInfoSender'>
               <textarea onChange={e => handleOnChange(e)} name='story' className='textareainfosender' placeholder='&nbsp;Write here...'></textarea>
               <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img style={{height: '3vh', margin: '1vh'}} src={admiracion}></img>
                    <h4 id='Disclaimer'>The author of the story will be tagged on social media.</h4>
                </div>
               <div className='textsenderbuttondiv'>
                    <button  className="backandendtextsender" onClick={() => {goBack()}}>Back</button>
                    <button disabled={state.story === ''} className="backandendtextsender" onClick={() => {sendData(db)}}>Continue</button>
               </div>
            </div>
        )
    }else if(number === 1){
        return(
            <div className='generalDivInfoSender'>
                <div className="imginputcontainer">
                    <input accept="image/*" id='inputfile' type='file' onChange={(e) => {setFile(e.target.files[0])/* ; renderizarImagen() */}}/>
                    <div className='imgcontainerinfosender'>
                        { file !== null && <img alt='asd' src={checkImage}></img>}
                    </div>
                    <input disabled={file} type='button' className='handlebuttoninputfile' onClick={e => yaNoseQueNombrePoner(e)}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img style={{height: '3vh', margin: '1vh'}} src={admiracion}></img>
                <h4 id='Disclaimer'>The author of the story will be tagged on social media.</h4>
                </div>
                <div className='textsenderbuttondiv'>
                    <button  className="backandendtextsender" onClick={() => {goBack()}}>Back</button>
                    <button onClick={() => sendImage()} disabled={file === null} className="backandendtextsender" >Continue</button>
               </div>
            </div>
        )
    }
}