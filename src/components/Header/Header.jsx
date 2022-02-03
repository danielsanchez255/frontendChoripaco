import React, { Component } from 'react';
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
                <h1>CHORIPACO</h1>
            </header>
        </>
    )
  }
}

export default Header;