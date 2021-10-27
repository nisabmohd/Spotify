import React from 'react'
import './css/Page.css'
import rightarr from './spotify icons/nextarr.png'
import leftarr from './spotify icons/prevarr.png'
import user from './user.jpg'
export default function Page() {
    return (
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
            </div>
        </div>
    )
}
