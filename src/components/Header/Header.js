import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../consts';
import { Button } from "@material-ui/core";
import logo from '../../assets/icon/logos/icon.png';
import { geoLocationCity } from "../../api";
import './style.scss';

function Header(props) {
  const { location: { pathname } } = props;
    const darkMode = useSelector(state => state.mainReducer.darkMode);
    const geoLocation = useSelector(state => state.mainReducer.geoLocation);

  useEffect(() => {
      if (geoLocation !== true) return;
      (async () => {
          try {
              await geoLocationCity();
          }
          catch (e) {
              console.log('geoLocationCity error')
          }
          finally {
              console.log('geoLocationCity set')
          }
      })()
  }, [geoLocation]);

  return (
      <div className={`header ${!darkMode ? 'header_light_mode' : ''}`}>
          <div className={'logo_wrapper'}>
              <img src={logo} alt={'logo'}/>
              <span className={'logo'}>Sunny</span>
          </div>
          <div className={'app_nav_buttons'}>
              <Link to={ROUTES.home}>
                  <Button
                      variant="text"
                      className={ pathname === ROUTES.home ? 'active' : ''}
                  >
                      Home
                  </Button>
              </Link>
              <Link to={ROUTES.favorites}>
                  <Button
                      variant="text"
                      className={pathname === ROUTES.favorites ? 'active' : ''}
                  >
                      Favorites
                  </Button>
              </Link>
          </div>
      </div>
  )
}

export default withRouter(Header)
