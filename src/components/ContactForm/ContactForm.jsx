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
                    <h5>Formulario de contacto: </h5>
                    <input 
                        type="text" 
                        className="form-field" 
                        aria-describedby="nameHelp" 
                        placeholder="Nombre del producto"
                        value={postData.name} 
                        onChange={(e) => setPostData({ ...postData ,name: e.target.value })} 
                    />
                    <small id="nameHelp" className="form-text text-muted">No se ha ingresado el nombre.</small>
                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-field" 
                        aria-describedby="stockHelp" 
                        placeholder="Cantidad del producto"
                        value={postData.stock} 
                        onChange={(e) => setPostData({ ...postData ,stock: e.target.value })} 
                    />
                    <small id="stockHelp" className="form-text text-muted">No se ha ingresado el stock.</small>
                </div>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-field" 
                        aria-describedby="priceHelp" 
                        placeholder="Precio del producto"
                        value={postData.price} 
                        onChange={(e) => setPostData({ ...postData ,price: e.target.value })} 
                    />
                    <small id="priceHelp" className="form-text text-muted">No se ha ingresado el precio.</small>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </>
    );
}

export default ContactForm;