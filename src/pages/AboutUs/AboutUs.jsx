import React from 'react';
import background from '../../assets/img/cafe.png';
import Fade from 'react-reveal/Fade';
import './AboutUs.css';

//Components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer';

const AboutUs = () =>  {

    return (
        <>
            <div style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-md-6">
                                <Fade left>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-choripaco">Mision</h2>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat 
                                                rutrum, quis posuere tristique magna eget vel blandit lacus. 
                                                Tristique himenaeos nunc euismod curae diam magnis, sed aliquet 
                                                nisi leo ligula justo, ac urna hendrerit parturient gravida. 
                                                Aenean felis aliquet et aliquam a risus nec potenti blandit sociis 
                                                dictum, rutrum faucibus proin curabitur sodales sollicitudin gravida 
                                                egestas nunc nisi.  
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-md-6">
                                <Fade right>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-choripaco">Vision</h2>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat 
                                                rutrum, quis posuere tristique magna eget vel blandit lacus. 
                                                Tristique himenaeos nunc euismod curae diam magnis, sed aliquet 
                                                nisi leo ligula justo, ac urna hendrerit parturient gravida. 
                                                Aenean felis aliquet et aliquam a risus nec potenti blandit sociis 
                                                dictum, rutrum faucibus proin curabitur sodales sollicitudin gravida 
                                                egestas nunc nisi.
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-md-6">
                                <Fade left>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-choripaco">Fabrica</h2>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat 
                                                rutrum, quis posuere tristique magna eget vel blandit lacus. 
                                                Tristique himenaeos nunc euismod curae diam magnis, sed aliquet 
                                                nisi leo ligula justo, ac urna hendrerit parturient gravida. 
                                                Aenean felis aliquet et aliquam a risus nec potenti blandit sociis 
                                                dictum, rutrum faucibus proin curabitur sodales sollicitudin gravida 
                                                egestas nunc nisi.    
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-md-6">
                                <Fade right>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h2 className="card-title text-choripaco">Restaurante</h2>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat 
                                                rutrum, quis posuere tristique magna eget vel blandit lacus. 
                                                Tristique himenaeos nunc euismod curae diam magnis, sed aliquet 
                                                nisi leo ligula justo, ac urna hendrerit parturient gravida. 
                                                Aenean felis aliquet et aliquam a risus nec potenti blandit sociis 
                                                dictum, rutrum faucibus proin curabitur sodales sollicitudin gravida 
                                                egestas nunc nisi.      
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>       
        </>
    );

}

export default AboutUs;