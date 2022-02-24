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