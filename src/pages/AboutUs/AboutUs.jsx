import React from 'react';
import background from '../../assets/img/fondo.png';
import './AboutUs.css';

//Components
import Header from '../../components/Header/Header.jsx';

const AboutUs = () =>  {

    return (
        <>
            <div style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h2 className="card-title text-dark">Misión</h2>
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
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h2 className="card-title text-dark">Visión</h2>
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
                            </div>
                        </div>
                        <div className="row pb-4">
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h2 className="card-title text-dark">Fábrica</h2>
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
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h2 className="card-title text-dark">Restaurante</h2>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </>
    );

}

export default AboutUs;