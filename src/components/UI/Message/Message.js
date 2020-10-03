import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from "@material-ui/core";
import Pulse from 'react-reveal/Pulse';
import './style.scss';

export default function Header(props) {
    const { text, btnText, onClick } = props;
    const darkMode = useSelector(state => state.mainReducer.darkMode);

    return (
        <div className={`message_wrapper ${!darkMode ? 'message_light_mode' : ''}`}>
            <Pulse>
                <div className={'msg'}>{text}</div>
            </Pulse>
            <div className={'message_button_wrapper'}>
                <Pulse>
                    <Button
                        variant="text"
                        onClick={() => onClick()}
                    >
                        {btnText}
                    </Button>
                </Pulse>
            </div>
        </div>
    )
}

