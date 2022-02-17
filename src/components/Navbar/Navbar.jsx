import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import cart from '../../assets/img/logo_cesta.png'
import "./Navbar.css";

class Navbar extends Component {

    render() {

        const buttonChangePosition = (e) => {
            e.preventDefault();
            /* const nav = document.getElementById('navbar').getBoundingClientRect(); */
            const navPosition = document.getElementById("navbar").style.position;
            if (navPosition == 'relative') {
                document.getElementById("navbar").style.position = "fixed";
                document.getElementById("navbar").style.top = "0px";
            } else if (navPosition == 'fixed') {
                document.getElementById("navbar").style.position = "relative";
                document.getElementById("navbar").style.top = "0px";
            }
        }

        return (
            <>
                <div className="navbar navbar-expand-md" id="navbar" style={{ position: 'relative' }}>
                    <div className="container">
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={e => buttonChangePosition(e)}>
                            <div id="nav-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                        
                        <a href="#" className="navbar-brand link-cart">
                            Tienda 
                            <img className="linkCartImage" src={cart} alt="cart" srcSet={cart} />
                            {/* <span className="badge badge-pill badge-light badge-navbar">4</span> */}
                        </a>
                    </div>
                </div>

                <nav>
                    <div id="navbarNavDropdown" className="navbar-collapse collapse text-center">
                        <ul id="main-menu" className="navbar-nav">
                            <li className="nav-item first">
                                <a href="/tienda" className="nav-link">Tienda</a>
                            </li>
                            <li className="nav-item second">
                                <a href="/conocenos" className="nav-link">Conocenos</a>
                            </li>
                            <li className="nav-item third">
                                <a href="/encuentranos" className="nav-link">Encuentranos</a>
                            </li>
                            <li className="nav-item fourth">
                                <a href="/contactanos" className="nav-link">Contactanos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;