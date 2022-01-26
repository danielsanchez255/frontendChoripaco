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
                <div class="navbar navbar-expand-md">
                    <div class="container">
                        <a href="#" class="navbar-brand">LOGO</a>
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
                    <div id="navbarNavDropdown" class="navbar-collapse collapse text-center">
                        <ul id="main-menu" class="navbar-nav">
                        <li class="nav-item">
                            <a href="/tienda" class="nav-link">Tienda</a>
                        </li>
                        <li class="nav-item">
                            <a href="/conocenos" class="nav-link">Conocenos</a>
                        </li>
                        <li class="nav-item">
                            <a href="/encuentranos" class="nav-link">Encuentranos</a>
                        </li>
                        <li class="nav-item">
                            <a href="/contactanos" class="nav-link">Contactanos</a>
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