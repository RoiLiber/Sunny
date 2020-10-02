import React from 'react';
import './style.scss';

export default function Rain(level) {

    function iStyle() {
        const topNum = Math.floor(Math.random() * 2) === 1 ? 1 : -1;
        const randomTopNum = Math.floor(topNum * (Math.random() * 1000));
        const topPx = `${randomTopNum}px`;
        const randomLeftNum = Math.floor(Math.random() * 2000);
        const leftPx = `${randomLeftNum}px`;

        return { left: leftPx, top: topPx }
    }

    return(
        <div className='visualisation-container'>
            <div className={`rain_effect ${level === 3 ? 'blnk' : ''}`}>
                {[...Array(50 * level)].map((el, index) => <i key={index} style={iStyle()}/>)}
            </div>
        </div>
    )
}
