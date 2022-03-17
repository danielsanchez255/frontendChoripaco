import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo_crema.png';
import Navbar from '../Navbar/Navbar.jsx'
import "./Header.css";

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <header className="headerChoripaco">
                <a onClick={()=> navigate('/')}>
                    <img className="headerImage" src={ logo } srcSet={ logo } alt="logo" />
                </a>
                <Navbar />
            </header>
        </>
    )
}

export default Header;