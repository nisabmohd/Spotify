import React from 'react'
import './css/Bottom.css'
import t1 from './music thhb/call youu mine.jpg'
import heart from './spotify icons/fav.png'
import news from './spotify icons/news.png'
import shuffle from './spotify icons/shuffle.png'
import prevm from './spotify icons/prevm.png'
import nextm from './spotify icons/nextm.png'
import repeat from './spotify icons/repeat.png'
import play from './spotify icons/resumed.png'

import fullvol from './spotify icons/fullvol.png'
import mic from './spotify icons/mic.png'
import pcimg from './spotify icons/pcimg.png'
import rico from './spotify icons/rico.png'


export default function Playbar() {
    return (
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
                            <img src={play} alt="" id="play" />
                        </div>
                        <img src={nextm} alt="" />
                        <img src={repeat} alt="" />
                    </div>
                </div>
                <div className="movebar">
                    <input type="range" max="100" min="0" value="1" />
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
                        <input type="range" />
                    </div>
            </div>
        </div>
    )
}