import React from 'react';
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
import Pulse from 'react-reveal/Pulse';
import { setGeoLocationApproval } from '../../../actions/mainActions';
import './style.scss';

function Header(props) {
    const { text, btnText, darkMode, onClick } = props;

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

const mapStateToProps = state => ({
    darkMode: state.mainReducer.darkMode
});

export default connect(mapStateToProps, setGeoLocationApproval)(Header)
