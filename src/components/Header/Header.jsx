import React, { Component } from 'react';
import logo from '../../assets/img/logo_crema.png';
import Navbar from '../Navbar/Navbar.jsx'
import "./Header.css";

class Header extends Component {

  render() {
    return (
        <>
            <header className="headerChoripaco">
                <div className="headerShadowChoripaco">
                    <a href="/">
                        <img className="headerImage" src={logo} alt="logo" />
                    </a>
                    <Navbar />
                </div>
            </header>
        </>
    )
  }
}

export default Header;