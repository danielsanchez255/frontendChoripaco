import React from 'react';
import background from '../../assets/img/cafe.png';
import './Home.css';

//Components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer';

//Images
import chorizos from '../../assets/img/chorizos.png';
import lomo from '../../assets/img/lomo.png';
import tocineta from '../../assets/img/tocineta.png';


const Home = () =>  {

    return (
        <>
            <div style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <Header />
                <div className="content">
                    <div id="mainDiv">
                        <div id="posts">
                            <div id="post1" className="post" style={{ backgroundColor: '#f48071', backgroundImage: 'url(' + chorizos + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="postDiv">
                                    <h4>Recetas</h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse accusantium incidunt 
                                        alias, magnam cupiditate, ad est nemo ex voluptas nulla animi iste voluptatum facilis 
                                        porro natus ipsum assumenda asperiores dolore.
                                    </p>
                                </div>
                            </div>
                            <div id="post2" className="post" style={{ backgroundColor: '#f04e39', backgroundImage: 'url(' + lomo + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="postDiv">
                                    <h4>Menú</h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse accusantium incidunt 
                                        alias, magnam cupiditate, ad est nemo ex voluptas nulla animi iste voluptatum facilis 
                                        porro natus ipsum assumenda asperiores dolore.
                                    </p>
                                </div>
                            </div>
                            <div id="post3" className="post" style={{ backgroundColor: '#771a15', backgroundImage: 'url(' + tocineta + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="postDiv">
                                    <h4>Reconocimientos</h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse accusantium incidunt 
                                        alias, magnam cupiditate, ad est nemo ex voluptas nulla animi iste voluptatum facilis 
                                        porro natus ipsum assumenda asperiores dolore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>       
        </>
    );

}

export default Home;