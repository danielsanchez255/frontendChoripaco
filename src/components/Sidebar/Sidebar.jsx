import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";

class Sidebar extends Component {

    render() {
        return (
            <>
                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Choripaco Logo</h3>
                        </div>

                        <ul className="list-unstyled components">
                            <p>Administrador</p>
                            <li className="active">
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Productos</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Producto</a>
                                    </li>
                                    <li>
                                        <a href="#">Categoría</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Usuarios</a>
                            </li>
                            {/* <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                                <ul className="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <a href="#">Page 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 3</a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                        <hr/>
                        <ul className="list-unstyled CTAs">
                            <li>
                                <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Cerrar sesión</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default Sidebar;