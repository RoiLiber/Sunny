import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../consts'
import Header from '../../components/Header';
import HomePage from '../../components/HomePage';
import Favorites from '../../components/Favorites'
import './style.scss';

function WeatherApp(props) {
    const { darkMode } = props;

    return (
        <div className={`weather_container ${!darkMode ? 'weather_container_light_mode' : ''}`}>
            <Header/>
            <Switch>
                <Route exect path={ROUTES.home} component={HomePage}/>
                <Route exect path={ROUTES.favorites} component={Favorites}/>
                <Route path="process.env.PUBLIC_URL + '/'" render={() => <Redirect to="/home"/>}/>
            </Switch>
        </div>
    )
}

const mapStateToProps = state => ({
    darkMode: state.mainReducer.darkMode
});

export default connect(mapStateToProps)(WeatherApp)


