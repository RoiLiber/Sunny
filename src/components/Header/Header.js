import React, {useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../consts';
import { Button } from "@material-ui/core";
import logo from '../../assets/icon/logos/icon.png';
import './style.scss';
import {geoLocationCity} from "../../api";

function Header(props) {
  const { location: { pathname }, darkMode } = props;

    useEffect(() => {
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
    }, []);

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

const mapStateToProps = state => ({
    darkMode: state.mainReducer.darkMode
});

export default compose(connect(mapStateToProps), withRouter)(Header)
