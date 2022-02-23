import React, { Component } from 'react';
import logo from '../../assets/img/logo_crema.png';
import Navbar from '../Navbar/Navbar.jsx'
import "./Header.css";

class Header extends Component {

  componentDidMount() {

    /* if (localStorage.getItem('user_token')) {

      this.setState({
        token: localStorage.getItem('user_token')
      })
      
    } */

  }

  logout = () => {

    /* this.setState({
      token: ''
    })
    localStorage.removeItem('user_token')
    window.location.href = "/login" */

  }

  render() {
    return (
        <>
            <header className="headerChoripaco">
                <div className="headerShadowChoripaco">
                    <img className="headerImage" src={logo} alt="logo" />
                    <Navbar />
                </div>
            </header>
        </>
    )
  }
}

export default Header;