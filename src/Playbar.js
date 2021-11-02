import React from 'react'
import { useState } from 'react'
import './css/Bottom.css'
import './css/bottomresp.css'
import t1 from './music thhb/call youu mine.jpg'
import heart from './spotify icons/fav.png'
import news from './spotify icons/news.png'
import shuffle from './spotify icons/shuffle.png'
import prevm from './spotify icons/prevm.png'
import nextm from './spotify icons/nextm.png'
import repeat from './spotify icons/repeat.png'
import playic from './spotify icons/resumed.png'

import fullvol from './spotify icons/fullvol.png'
import mic from './spotify icons/mic.png'
import pcimg from './spotify icons/pcimg.png'
import rico from './spotify icons/rico.png'
import pauseic from './spotify icons/pauseico.png'
import callyoumine from './Music/Call You Mine.mp3'

// import song1 from './Music/Call You Mine.mp3'




export default function Playbar() {
   
    // let song= new Audio(song1)
    const [Img1, setImg1] = useState(pauseic);
    const [mode, setMode] = useState('pause')
    function func() {
        let barrange = document.getElementById('barrange')
        let song = document.getElementById('songsbar')
        if (mode === "pause") {
            setMode('play')
            setImg1(playic)
            song.play();
            song.addEventListener('timeupdate', () => {
                   barrange.value=parseInt((song.currentTime/song.duration)*100); 
            })
            document.title = 'Can I Call You Mine'
            if( barrange.value===100){
                setImg1(pauseic)
                document.title = 'Spotify - Web player'
            }

        }
        if (mode === "play") {
            setMode('pause')
            document.title = 'Spotify - Web player'
            setImg1(pauseic)
            song.pause();
        }
    }

    function bvolume() {
        let bvol = document.getElementById('bvol').value;
        bvol = bvol / 100;
        document.getElementById('songsbar').volume = bvol

    }
    function seek(){
        let barrange = document.getElementById('barrange')
        let song = document.getElementById('songsbar')
        song.currentTime=(barrange.value*song.duration)/100;
    }

    return (
        <div>
            <div className="bottom">
                <div className="left">
                    <div className="thumbnail">
                        <img className="tb" src={t1} alt="" />
                    </div>
                    <div className="songName">
                        <p className="sname">Call You Mine</p>
                        <p className="desc">
                            The Chainsmokers, Bebe Rexha
                        </p>
                    </div>
                    <div className="btnsforthis">
                        <button className="heartp"><img src={heart} alt="" /></button>
                        <button className="heartp"><img id="pnews" src={news} alt="" /></button>
                    </div>
                </div>
                <div className="middle">
                    <div className="pbuttons">
                        <div className="pchildb">
                            <img src={shuffle} alt="" />
                            <img src={prevm} alt="" />
                            <div className="playpause">
                                <img src={Img1} alt="" id="play" onClick={func} />
                            </div>
                            <img src={nextm} alt="" />
                            <img src={repeat} alt="" />
                        </div>
                    </div>
                    <div className="movebar">
                        <input type="range" id="barrange" onChange={seek} min="0" max="100" value="0" />
                    </div>
                </div>
                <div className="right">
                    <div className="ricons">
                        <div className="rbuttons">
                            <img src={mic} alt="" className="rbtns" />
                            <img src={rico} alt="" className="rbtns" />
                            <img src={pcimg} alt="" className="rbtns" />
                            <img src={fullvol} alt="" className="rbtns" />
                        </div>
                        <input type="range" id="bvol" onChange={bvolume} />
                    </div>
                </div>
            </div>
            <div className="audionow">
                <audio id="songsbar" src={callyoumine} controls></audio>
            </div>
        </div>
    )
}
