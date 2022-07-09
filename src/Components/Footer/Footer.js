import React from 'react';
import {Fragment} from 'react';
import './Footer.css';
import Logo from './../../Assets/logo.png';
import Insta from './../../Assets/Insta.png';
import Discord from './../../Assets/discord.png';
import Github from './../../Assets/github.png';
import Linkedin from './../../Assets/download.png';

function Footer () {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="container-fluid align-items-center justify-content-center justify-content-lg-between">
          <a className="navbar-brand" href="https://acm-thapar.netlify.app/">
            <img
              src={Logo}
              alt=""
              width={'auto'}
              className="d-inline-block align-text-top logo float-left"
            />
          </a>
          <div>
            <a href="https://discord.gg/8gux4cpXty" className="text-end mx-3">
              <img
                src={Discord}
                alt=""
                width={'auto'}
                className="d-inline-block align-text-top discord"
              />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=w9d7tcihe6sc&utm_content=8s4mupy" className="text-end mx-3">
              <img
                src={Insta}
                alt=""
                width={'auto'}
                className="d-inline-block align-text-top discord"
              />
            </a>
            <a href="https://github.com/ACM-Thapar" className="text-end mx-3">
              <img
                src={Github}
                alt=""
                width={'auto'}
                className="d-inline-block align-text-top discord"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/thapar-acm-student-chapter"
              className="text-end mx-3"
            >
              <img
                src={Linkedin}
                alt=""
                width={'auto'}
                className="d-inline-block align-text-top discord"
              />
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Footer;
