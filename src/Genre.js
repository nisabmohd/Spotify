import React from 'react'
import msd from './music thhb/ms dhoni.png'
import wdw from './music thhb/why dont we.png'
export default function Genre(props) {
    return (
        <div className="boxgenre-parent">
           
        <div className="boxgenre">
        <p>{props.gen1}</p>
        <img src={msd} alt="" />
        </div>
        <div className="boxgenre2">
        <p>{props.gen2}</p>
        <img src={wdw} alt="" />
        </div>
        </div>
    )
}
