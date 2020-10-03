import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../consts';
import { setGeoLocationApproval } from '../../actions/mainActions';
import Header from '../../components/Header';
import HomePage from '../../components/HomePage';
import Favorites from '../../components/Favorites';
import Message from "../../components/UI/Message/Message";
import './style.scss';

function WeatherApp(props) {
    const { geoLocation, darkMode } = props;

    return (
        <div className={`weather_container ${!darkMode ? 'weather_container_light_mode' : ''}`}>
            <Header/>
            {geoLocation !== true
                ? <Message text={'Sunny want to know your location, can we?'} btnText={'Approve'} onClick={() => props.setGeoLocationApproval(true)}/>
                : <Switch>
                    <Route exect path={ROUTES.home} component={HomePage}/>
                    <Route exect path={ROUTES.favorites} component={Favorites}/>
                    <Route path='/' render={() => <Redirect to="/home"/>}/>
            </Switch>}
        </div>
    )
}

const mapStateToProps = state => ({
    darkMode: state.mainReducer.darkMode,
    geoLocation: state.mainReducer.geoLocation
});

export default connect(mapStateToProps, { setGeoLocationApproval })(WeatherApp)


