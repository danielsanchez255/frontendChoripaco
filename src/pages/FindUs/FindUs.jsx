import React from 'react';
import background from '../../assets/img/cafe.png';
import './FindUs.css';

//Components
import Header from '../../components/Header/Header.jsx';

const FindUs = () =>  {

    return (
        <>
            <div style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pt-5 pb-4">
                                <div className="container p-3 pb-0">
                                    <div className="row">
                                        <div className="col-6 col-md-2 offset-md-4 mt-2">
                                            <a className="social-networks" style={{ padding: '3px 15px 1px 13px', color: '#583d27' }} href="https://www.facebook.com/Choripaco/" role="button">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a className="social-networks" style={{ padding: '3px 10px 1px 10px', color: '#583d27' }} href="https://www.instagram.com/choripaco/?hl=es-la" role="button">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <p className="follow-us-text text-left">Siguenos en <br/> nuestras redes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 pb-4">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63610.07738020003!2d-75.68277670844658!3d4.833456951441133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38822d248ed3c3%3A0xf42ac22846d89bf9!2sChoripaco!5e0!3m2!1ses!2sco!4v1645589727595!5m2!1ses!2sco" width="100%" height="450vw" style={{ border: 0 }} allowFullScreen loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </>
    );

}

export default FindUs;