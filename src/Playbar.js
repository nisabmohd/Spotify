import React from 'react'
import { useState } from 'react'
import './css/Bottom.css'
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




export default function Playbar() {
    const [Img1, setImg1] = useState(pauseic);
    const [play, setplay] = useState('play')
    document.title = 'Can I Call You Mine'
    function func() {
        let palysize
        let barrange = document.getElementById('barrange')
        let callyoumine = document.getElementById('callyoumine')
        let dur = ((callyoumine.duration))
        let t=dur/600
        // alert(dur)
        if (play === 'play') {
            setImg1(playic)
            callyoumine.play();
            setplay('pause')
            palysize=setInterval(() => {
               barrange.value=t++
            },dur*10);
            if(barrange.value===100){
                setImg1(playic)
            }
         }
        if (play === 'pause') {
            document.title = 'Spotify - Web player'
            setImg1(pauseic)
            callyoumine.pause();
            barrange.value=t;
            setplay('play')
            return false
        }
    }
    function bvolume() {
        let bvol = document.getElementById('bvol').value;
        bvol = bvol / 100;
        console.log(bvol);
        document.getElementById('callyoumine').volume = bvol
    }
    return (
        <>
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
                        <input type="range" id="barrange" min="0" max="100" value="0" />
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
                <audio id="callyoumine" src={callyoumine} controls></audio>
            </div>
        </>
    )
}
