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

import Swal from "sweetalert2"; 

const imageURL = 'https://www.comedera.com/wp-content/uploads/2021/03/shutterstock_1379830838-huevos-con-chorizo.jpg';

const Home = () =>  {

    const moreClick = () => {
        Swal.fire({
            title: 'Próximamente',
            text: 'Sitio en construcción',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: 'green',
            confirmButtonText: 'Continuar',
            showCancelButton: false,
        });
    }

    return (
        <>
            <div style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* <h1 className="mt-5">Ingresa a nuestra tienda</h1> */}

                                <section className="content-section">
                                    <h1 className="text-uppercase titles text-section-right">Recetas</h1>
                                    <div class="circleImage">
                                        <span class="helper"></span><img src={chorizos} />
                                    </div>
                                    <p className="text-section text-section-right text-white" style={{ borderRight: '1px solid #f04e39', paddingRight: '15px' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Pariatur fugit a ullam rem eum sunt aut ad eligendi quod neque, 
                                        tempora, ea cum magnam ipsam perferendis et illum quibusdam aliquam.
                                        <br/>
                                        <button className="btn btn-more mt-2" onClick={() => moreClick()}>Ir a recetas</button>
                                    </p>
                                </section>

                                <section className="content-section">
                                    <h1 className="text-uppercase titles">Menú</h1>
                                    <div class="circleImage circleImage-right">
                                        <span class="helper"></span><img src={tocineta} />
                                    </div>
                                    <p className="text-section text-section-left text-white" style={{ borderLeft: '1px solid #f04e39', paddingLeft: '15px' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Pariatur fugit a ullam rem eum sunt aut ad eligendi quod neque, 
                                        tempora, ea cum magnam ipsam perferendis et illum quibusdam aliquam.
                                        <br/>
                                        <button className="btn btn-more mt-2" onClick={() => moreClick()}>Ir al menú</button>
                                    </p>
                                </section>

                                <section className="content-section">
                                    <h1 className="text-uppercase title-acknowledgments">Reconocimientos</h1>
                                    <p className="text-section-acknowledgments text-section-center text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Pariatur fugit a ullam rem eum sunt aut ad eligendi quod neque, 
                                        tempora, ea cum magnam ipsam perferendis et illum quibusdam aliquam.
                                        <hr className="mt-3" style={{ width: '15vw' }}/>
                                        <div className="row mt-5">
                                            <div className="col-md-4 text-center">
                                                <img src={lomo} className="mt-2" width="100%" />
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <img src={lomo} className="mt-2" width="100%" />
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <img src={lomo} className="mt-2" width="100%" />
                                            </div>
                                        </div>
                                    </p>
                                </section>
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