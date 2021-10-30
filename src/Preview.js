import React from 'react'
import Header from './Header';
import './css/songprev.css'
import './css/background.css'
import counting from './music thhb/counting on you.png'
import msdhoni from './music thhb/ms dhoni.png'
import whydontwe from './music thhb/why dont we.png'
import xxx from './music thhb/xxx.png'
export default function Preview(props) {
    let image;
    if (props.img === "ctng") {
        image = counting
    }
    if (props.img === "loveback") {
        image = whydontwe
    }
    if (props.img === "raaste") {
        image = msdhoni
    }
    if (props.img === "xxxso") {
        image = xxx
    }
    return (
        <div className="main-container">
            <div className="moveright">
                <Header />
                <div className="songprev">
                    <div className="itemofsongpreev">
                        <div className="imgspage">
                            <img src={image} alt="" />
                        </div>
                        <div className="aboutsong">
                            <div className="name">
                                <h3>
                                    {props.name}
                                </h3>
                            </div>
                            <div className="singer">
                                <img src={image} alt="" className="smallimgforsinger" />
                                <h3>
                                    {props.singer}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
