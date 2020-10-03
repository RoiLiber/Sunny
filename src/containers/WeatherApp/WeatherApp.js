import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../consts';
import { setGeoLocationApproval } from '../../actions/mainActions';
import Header from '../../components/Header';
import HomePage from '../../components/HomePage';
import Favorites from '../../components/Favorites';
import Message from "../../components/UI/Message/Message";
import './style.scss';

export default function WeatherApp() {
    const dispatch = useDispatch();
    const geoLocation = useSelector(state => state.mainReducer.geoLocation);
    const darkMode = useSelector(state => state.mainReducer.darkMode);
    const messageText = 'Sunny want to know your location, can we?';

    return (
        <div className={`weather_container ${!darkMode ? 'weather_container_light_mode' : ''}`}>
            <Header/>
            {geoLocation !== true
                ? <Message text={messageText} btnText={'Approve'} onClick={() => dispatch(setGeoLocationApproval(true))}/>
                : <Switch>
                    <Route exect path={ROUTES.home} component={HomePage}/>
                    <Route exect path={ROUTES.favorites} component={Favorites}/>
                    <Route path='/' render={() => <Redirect to="/home"/>}/>
            </Switch>}
        </div>
    )
}


