import React from 'react';
import background from '../../assets/img/cafe.png';
import Zoom from 'react-reveal/Zoom';
import './Contact.css';

//Components
import Header from '../../components/Header/Header.jsx';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';

const Contact = () =>  {

    return (
        <>
            <div style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 pt-5 pb-4">
                                <Zoom>
                                    <ContactForm />
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>       
        </>
    );

}

export default Contact;