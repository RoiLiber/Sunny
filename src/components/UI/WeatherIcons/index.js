import React from 'react';
import './style.scss';

function sunShower() {
    return (
        <div className="weather_icon sun-shower">
            <div className="cloud"/>
            <div className="sun">
                <div className="rays"/>
            </div>
            <div className="rain"/>
        </div>
    )
}
function thunderStorm() {
    return (
        <div className="weather_icon thunder-storm">
            <div className="cloud"/>
            <div className="lightning">
                <div className="bolt"/>
                <div className="bolt"/>
            </div>
        </div>
    )
}
function cloudy() {
    return (
        <div className="weather_icon cloudy">
            <div className="cloud"/>
            <div className="cloud"/>
        </div>
    )
}
function flurries() {
    return (
        <div className="weather_icon flurries">
            <div className="cloud"/>
            <div className="snow">
                <div className="flake"/>
                <div className="flake"/>
            </div>
        </div>
    )
}
function sunny() {
    return (
        <div className="weather_icon sunny">
            <div className="sun">
                <div className="rays"/>
            </div>
        </div>
    )
}
function rainy() {
    return (
        <div className="weather_icon rainy">
            <div className="cloud"/>
            <div className="rain"/>
        </div>
    )
}

export default {
    sunShower,
    thunderStorm,
    cloudy,
    flurries,
    sunny,
    rainy
}
