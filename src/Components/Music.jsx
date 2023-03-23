import React from 'react'
import musicona from '../Media/musicona.mp3'
import { useState, useEffect } from 'react'
import volumepng from '../Media/sound_on.png'
import mutepng from '../Media/sound_off.png'
import '../Styles/Music.css'


export default function Music(){

    const [playing, setPlaying] = useState(false);
      
    const player = new Audio(musicona);
    player.loop = true
 
    useEffect(() => {
        playing ? player.play() : player.pause();

        // This is cleanup of the effect
        return () => player.pause();

    }, [playing]);
   // ^ Run the effect every time the `playing` is changed

    function togglePlay() {
        // Using the callback version of `setState` so you always
        // toggle based on the latest state
        setPlaying(s => !s);
    }



    return(
        <div className="generalDivMusic">
                {playing? <img src={mutepng} className='buttonmusic' onClick={() => togglePlay()}></img> : 
                <img  src={volumepng} className='buttonmusic' onClick={() => togglePlay()}></img>  }
        </div>
    )

    

}