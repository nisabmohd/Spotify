import React from 'react'
import './css/Search.css'
// import './css/background.css'
import Header from './Header'
// import Genre from './Genre'
import msd from './music thhb/ms dhoni.png'
import wdw from './music thhb/why dont we.png'
import Pagesongs from './Pagesongs'
export default function Search() {
    return (
        <div className="search-container">
            <div className="searchright">
                <Header search="true" />
                <div className="pfhj">
                <div className="genre">
                    <h3>Your top genre</h3>
                </div>
                <div className="searchcontainer">
                <div className="boxgenre-parent">
            <div className="boxgenre">
                <p>Pop</p>
                <img src={msd} alt="" />
            </div>
            <div className="boxgenre2">
                <p>Hip-Hop</p>
                <img src={wdw} alt="" />
            </div>
        </div>
                </div>

                <Pagesongs />
                </div>
            </div>
        </div>
    )
}
