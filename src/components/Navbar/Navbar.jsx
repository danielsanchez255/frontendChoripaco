import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cart from '../../assets/img/logo_cesta.png';
import "./Navbar.css";

const Navbar = () => {
    
    const items = useSelector(state => state.cart.addedItems);

    const buttonChangePosition = (e) => {
        e.preventDefault();
        /* const nav = document.getElementById('navbar').getBoundingClientRect(); */
        const navPosition = document.getElementById("navbar").style.position;
        if (navPosition == 'relative') {
            document.getElementById("navbar").style.position = "fixed";
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("navbar").style.height = "40px";
            document.getElementById("link-cart").style.display = "none";
            document.getElementById("linkCartImage").style.display = "none";
            document.getElementById("counter").style.display = "none";
        } else if (navPosition == 'fixed') {
            document.getElementById("navbar").style.position = "relative";
            document.getElementById("navbar").style.top = "0px";
            document.getElementById("link-cart").style.display = "initial";
            document.getElementById("linkCartImage").style.display = "initial";
            document.getElementById("linkCartImage").style.top = "0px";
            document.getElementById("counter").style.display = "initial";
        }
    }

    const navigate = useNavigate();

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
                    <div>
                        <button className="navbar-brand link-cart" id="link-cart" onClick={()=> navigate('/tienda')}>
                            Tienda
                        </button>
                        <img id="linkCartImage" className="linkCartImage" src={ cart } srcSet={ cart } alt="cart" onClick={()=> navigate('/carrito')} />
                        <span id="counter" className="counter">{ items.length }</span>
                    </div>
                </div>
            </div>

            <nav>
                <div id="navbarNavDropdown" className="navbar-collapse collapse text-center">
                    <ul id="main-menu" className="navbar-nav">
                        <li className="nav-item first">
                            <a className="nav-link" onClick={()=> navigate('/tienda')}>Tienda</a>
                        </li>
                        <li className="nav-item second">
                            <a className="nav-link" onClick={()=> navigate('/conocenos')}>Conocenos</a>
                        </li>
                        <li className="nav-item third">
                            <a className="nav-link" onClick={()=> navigate('/encuentranos')}>Encuentranos</a>
                        </li>
                        <li className="nav-item fourth">
                            <a className="nav-link" onClick={()=> navigate('/contactanos')}>Contactanos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;