import React from 'react'
import './css/Page.css'
import './css/background.css'
import rightarr from './spotify icons/nextarr.png'
import leftarr from './spotify icons/prevarr.png'
import user from './user.jpg'
import pgheart from './spotify icons/pgheart.png'
import greenplay from './spotify icons/greenplay.png'

import counting from './music thhb/counting on you.png'
import msdhoni from './music thhb/ms dhoni.png'
import whydontwe from './music thhb/why dont we.png'
import xxx from './music thhb/xxx.png'

import mythpat from './music thhb/mythpat.png'
import ranveer from './music thhb/ranveer alh.png'
import bose from './music thhb/bose.png'
import virus from './music thhb/virus.png'
import horror from './music thhb/horror.png'
import chanakya from './music thhb/chanakya.png'
import Playbar from './Playbar'

export default function Page() {
    return (
        <>
        <div className="main-container">
            <div className="moveright">
                <div className="header">
                    <div className="arrows">
                        <button className="arr">
                            <img src={leftarr} alt="" className="arrowspeice" />
                        </button>
                        <button className="arr">
                            <img src={rightarr} alt="" className="arrowspeice" />
                        </button>
                    </div>
                    <div className="contact-info">
                        <div className="buttons">
                            <div className="ubtn-container">
                                <button className="ubtn">UPGRADE</button>
                            </div>
                            <div className="userbtn-container">
                                <button className="userbtn"><img src={user} alt="" /><p>Nisab</p><p className="unArr">▼</p></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="greet">
                    <h3>Hello!</h3>
                </div>
                <div className="indexformusic">
                    <div className="ipbox bgcolorpg">
                        <div className="ipimg">
                            <img src={pgheart} alt="" />
                        </div>
                        <div className="boxtext">
                            <p>Liked Songs</p>
                        </div>
                        <div className="greenplay">
                            <img src={greenplay} alt="" />
                        </div>
                    </div>
                    <div className="ipbox bgcolorpg">
                        <div className="ipimg">
                            <img src={counting} alt="" />
                        </div>
                        <div className="boxtext">
                            <p>Counting On You</p>
                        </div>
                        <div className="greenplay">
                            <img src={greenplay} alt="" />
                        </div>
                    </div>
                    <div className="ipbox bgcolorpg ">
                        <div className="ipimg">
                            <img src={msdhoni} alt="" />
                        </div>
                        <div className="boxtext">
                            <p>MS Dhoni</p>
                        </div>
                        <div className="greenplay">
                            <img src={greenplay} alt="" />
                        </div>
                    </div>
                    <div className="ipbox bgcolorpg">
                        <div className="ipimg">
                            <img src={xxx} alt="" />
                        </div>
                        <div className="boxtext">
                            <p>XXXTENTACION</p>
                        </div>
                        <div className="greenplay">
                            <img src={greenplay} alt="" />
                        </div>
                    </div>
                    <div className="ipbox bgcolorpg">
                        <div className="ipimg">
                            <img src={whydontwe} alt="" />
                        </div>
                        <div className="boxtext">
                            <p>Why Don't We</p>
                        </div>
                        <div className="greenplay">
                            <img src={greenplay} alt="" />
                        </div>
                    </div>
                </div>
                <a href="/" className="greetliketext">
                    <h3>Spotify orignal & exclusive shows</h3>
                </a>
                <div className="exclusives">
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={mythpat} alt="" />
                            <div className="authorex">
                                The Mythpat Podcast
                            </div>
                            <div className="channelex">
                                Spotify Studios
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={ranveer} alt="" />
                            <div className="authorex">
                                The Ranveer Show
                            </div>
                            <div className="channelex">
                                Beer Biceps
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={bose} alt="" />
                            <div className="authorex">
                                Bhaskar Bose
                            </div>
                            <div className="channelex">
                                Spotify Studios
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={virus} alt="" />
                            <div className="authorex">
                                Virus 2062
                            </div>
                            <div className="channelex">
                                Spotify Studios
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={chanakya} alt="" />
                            <div className="authorex">
                                Chanakya Niti
                            </div>
                            <div className="channelex">
                                Kiran Chadva
                            </div>
                        </div>
                    </div>
                    <div className="exclusive-gris">
                        <div className="exboxes exbg">
                            <img src={horror} alt="" />
                            <div className="authorex">
                                Horror Time
                            </div>
                            <div className="channelex">
                                Sarthak Mishra
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Playbar />
        </>
    )
}
