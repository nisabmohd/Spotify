import React from 'react'
import './css/Page.css'
import './css/background.css'

import pgheart from './spotify icons/pgheart.png'
import greenplay from './spotify icons/greenplay.png'
import Preview from './Preview'
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
// import Playbar from './Playbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './Header'

export default function Page() {
    return (
        <>
        <div className="main-container">
            <div className="moveright">
                    <Header/>
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
                <Link to="/prev1" className="ipbox bgcolorpg">
                    <div className="ipimg">
                        <img src={counting} alt="" />
                    </div>
                    <div className="boxtext">
                        <p>Counting On You</p>
                    </div>
                    <div className="greenplay">
                        <img src={greenplay} alt="" />
                    </div>
                </Link>
                <Link to="/prev2" className="ipbox bgcolorpg ">
                    <div className="ipimg">
                        <img src={msdhoni} alt="" />
                    </div>
                    <div className="boxtext">
                        <p>MS Dhoni</p>
                    </div>
                    <div className="greenplay">
                        <img src={greenplay} alt="" />
                    </div>
                </Link>
                <Link to="/prev3" className="ipbox bgcolorpg">
                    <div className="ipimg">
                        <img src={xxx} alt="" />
                    </div>
                    <div className="boxtext">
                        <p>XXXTENTACION</p>
                    </div>
                    <div className="greenplay">
                        <img src={greenplay} alt="" />
                    </div>
                </Link>
                <Link to="prev4" className="ipbox bgcolorpg">
                    <div className="ipimg">
                        <img src={whydontwe} alt="" />
                    </div>
                    <div className="boxtext">
                        <p>Why Don't We</p>
                    </div>
                    <div className="greenplay">
                        <img src={greenplay} alt="" />
                    </div>
                </Link>
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
  
        {/* <Playbar /> */}
        </>
    )
}
