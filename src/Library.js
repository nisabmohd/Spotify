import React from 'react'
import './css/background.css'
import Header from './Header'
import './css/library.css'
import {
  Link
  } from "react-router-dom";
// import Playbar from './Playbar'
export default function Library() {
    return (
        <>
        <div className="main-container">
        <div className="moveright">
            <Header></Header>
            <div className="playlistpagecontent">
                <div className="playlistpageheader">
                    <h3>Playlist</h3>
                </div>
                <Link  to="/liked" className="plsylistboxblur-cont" >
                    <div className="plsylistboxblur">
                        <div className="sometempc">

                        </div>
                        <div className="h3wherelike">
                            <h3>Liked Songs</h3>
                            <p>12 Liked Songs</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    {/* <Playbar /> */}
    </>
    )
}
