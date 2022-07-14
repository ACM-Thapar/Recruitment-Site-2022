import React from 'react';
import {Fragment} from 'react';
import Logo from './../../Assets/logo.png';
import Discord from './../../Assets/discord.png';
import './Navbar.css';

function Navbar () {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="container-fluid align-items-center">
          <a className="navbar-brand" href="https://www.acmthapar.com">
            <img
              src={Logo}
              alt=""
              width={'auto'}
              className="d-inline-block align-text-top logo"
            />
          </a>
          <a href="https://discord.gg/8gux4cpXty" className="text-end me-3">
            <img
              src={Discord}
              alt=""
              width={'auto'}
              className="d-inline-block align-text-top discord"
            />
          </a>
        </div>
      </nav>

    </Fragment>
  );
}

export default Navbar;
