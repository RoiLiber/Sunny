import React from 'react';
import './style.scss';

export default function ControlledRainEffect() {

    return(
        <div className={'container_wrapper'}>
            <div className="container">
                {[...Array(400)].map((el, index) => <div className="trigger" key={index}/>)}
                <div className="monitor">
                    <div className="camera o-x">
                        <div className="camera o-y">
                            <div className="camera o-z">
                                <div className="rainy_days">
                                    {[...Array(200)].map((el, index) => (
                                        <div className="rain" key={index}>
                                            <div className="graphic"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
