import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {

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
        <div>
            <header>
                <div className="navbar navbar-expand-md">
                    <div className="container">
                        <a href="#" className="navbar-brand">LOGO</a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <div id="nav-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </div>
                        </button>
                    </div>
                </div>

                <nav>
                    <div id="navbarNavDropdown" className="navbar-collapse collapse text-center">
                        <ul id="main-menu" className="navbar-nav">
                        <li className="nav-item">
                            <a href="/tienda" className="nav-link">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a href="/conocenos" className="nav-link">Conocenos</a>
                        </li>
                        <li className="nav-item">
                            <a href="/encuentranos" className="nav-link">Encuentranos</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contactanos" className="nav-link">Contactanos</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
  }
}

export default Navbar;