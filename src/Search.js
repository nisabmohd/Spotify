import React from 'react'
import './css/Search.css'
import './css/background.css'
import Header from './Header'
import Genre from './Genre'
import Pagesongs from './Pagesongs'
export default function Search() {
    return (
        <div className="main-container">
            <div className="moveright">
                <Header search="true" />
                <div className="genre">
                    <h3>Your top genre</h3>
                </div>
                <div className="searchcontainer">
                    <Genre gen1="Pop" gen2="Hip-Hop" ></Genre>
                </div>
                <Pagesongs />
            </div>
        </div>
    )
}
