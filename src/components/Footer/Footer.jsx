import React, { Component } from 'react';
import logo from '../../assets/img/logo_crema.png';
import Navbar from '../Navbar/Navbar.jsx'
import "./Footer.css";

class Footer extends Component {

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
            <footer className="page-footer font-small text-white" style={{ backgroundColor: 'rgba(68, 43, 13, .5)' }}>
                <div style={{ backgroundColor: '#ae2a18' }}>
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0">¡Conéctate con nosotros en redes sociales!</h6>
                            </div>
                            <div className="col-md-6 col-lg-7 text-center text-md-right">
                                <a href="https://www.facebook.com/Choripaco/" className="fb-ic">
                                    <i className="fa fa-facebook white-text mr-4"></i>
                                </a>
                                <a href="https://www.instagram.com/choripaco/?hl=es-la" className="ins-ic">
                                    <i className="fa fa-instagram white-text"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center text-md-left mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Acerca de Choripaco</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>

                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Enlaces</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <a href="/tienda">Tienda</a>
                            </p>
                            <p>
                                <a href="/conocenos">Conocenos</a>
                            </p>
                            <p>
                                <a href="/encuentranos">Encuentranos</a>
                            </p>
                            <p>
                                <a href="/contactanos">Contactanos</a>
                            </p>

                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contacto</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <i className="fa fa-home mr-3"></i> Santa Rosa de Cabal, Risaralda - Colombia Choripaco Cl. 7 #4 - 45
                            </p>
                            <p>
                            <i className="fa fa-envelope mr-3"></i> info@choripaco.com</p>
                            <p>
                            <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3" style={{ background: 'linear-gradient(0deg, rgba(68,43,13,1) 0%, rgba(255,255,255,0) 46%)' }}>© 2022 Copyright:
                    <a href="https://choripaco.com/"> Choripaco</a>
                </div>
            </footer>
        </>
    )
  }
}

export default Footer;