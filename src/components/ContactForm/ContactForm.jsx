import React, { useEffect, useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {

    const [postData, setPostData] = useState({
        name: '', stock: '', price: '', category: '', imageProduct: ''
    });

    const handleSubmit = (e) => {

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-3 col-md-3 align-self-center">
                            <b className="text-bold">
                                Nombre
                            </b>
                        </div>
                        <div className="col-9 col-md-9">
                            <input 
                                type="text" 
                                className="form-field" 
                                aria-describedby="nameHelp" 
                                placeholder="Ingresa el nombre completo"
                                value={postData.name} 
                                onChange={(e) => setPostData({ ...postData ,name: e.target.value })} 
                            />
                            <small id="nameHelp" className="form-text text-muted ml-3">No se ha ingresado el nombre.</small>
                        </div>
                    </div>                    
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-3 col-md-3 align-self-center">
                            <b className="text-bold">
                                Email
                            </b>
                        </div>
                        <div className="col-9 col-md-9">
                        <input 
                            type="email" 
                            className="form-field" 
                            aria-describedby="stockHelp" 
                            placeholder="Ingresa el email"
                            value={postData.stock} 
                            onChange={(e) => setPostData({ ...postData ,stock: e.target.value })} 
                        />
                        <small id="stockHelp" className="form-text text-muted ml-3">No se ha ingresado el stock.</small>
                        </div>
                    </div> 
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-3 col-md-3 align-self-center">
                            <b className="text-bold">
                                Celular
                            </b>
                        </div>
                        <div className="col-9 col-md-9">
                            <input 
                                type="number" 
                                className="form-field" 
                                aria-describedby="priceHelp" 
                                placeholder="Ingresa el número de contacto"
                                value={postData.price} 
                                onChange={(e) => setPostData({ ...postData ,price: e.target.value })} 
                            />
                            <small id="priceHelp" className="form-text text-muted ml-3">No se ha ingresado el precio.</small>
                        </div>
                    </div> 
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-3 col-md-3 align-self-center">
                            <b className="text-bold">
                                Tema
                            </b>
                        </div>
                        <div className="col-9 col-md-9">
                            <select 
                                className="form-field"
                                value={postData.category} 
                                onChange={(e) => setPostData({ ...postData ,category: e.target.value })} 
                            >
                                <option value="0">Reclamo</option>
                                <option value="1">PQR</option>
                            </select>
                            <small id="priceHelp" className="form-text text-muted ml-3">No se ha ingresado el precio.</small>
                        </div>
                    </div>
                </div>
                <div className="form-textarea">
                    <button type="submit" className="btn">Mensaje</button>
                    <textarea placeholder="Ingresa el mensaje" ></textarea>
                </div>
            </form>
        </>
    );
}

export default ContactForm;