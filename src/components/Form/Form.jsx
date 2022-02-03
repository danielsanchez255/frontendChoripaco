import React, { useEffect, useState } from 'react';
import Filebase from 'react-file-base64';
import './Form.css';

import { useDispatch, useSelector } from 'react-redux';
import { createProduct, updateProduct } from '../../services/actions/products.js'

const Form = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({
        name: '', stock: '', price: '', category: '', imageProduct: ''
    });
    const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    const clear = () => {
        setCurrentId(null);
        setPostData({ name: '', stock: '', price: '', category: '', imageProduct: '' });
    }

    useEffect(() => {
        if (product) setPostData(product)
    }, [product])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateProduct(currentId, postData));
            clear();
        } else {
            dispatch(createProduct(postData));
            clear();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h5>Formulario del producto: </h5>
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
                <div className="form-group">
                    <select 
                        className="form-field"
                        value={postData.category} 
                        onChange={(e) => setPostData({ ...postData ,category: e.target.value })} 
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <br />
                    <Filebase id="inputfile" type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData ,imageProduct: base64 })} />
                    <label for="file">Choose a file</label>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </>
    );
}

export default Form;