import React, { useState } from 'react';
import Filebase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import { createProduct } from '../../services/actions/products.js'

const Form = () => {

    const [postData, setPostData] = useState({
        name: '', stock: '', price: '', category: '', imageProduct: ''
    });
    const dispatch = useDispatch();

    /* const clear = () => {

    } */

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(postData));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleName">Nombre: </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-describedby="nameHelp" 
                        value={postData.name} 
                        onChange={(e) => setPostData({ ...postData ,name: e.target.value })} 
                    />
                    <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleStock">Stock: </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        aria-describedby="stockHelp" 
                        value={postData.stock} 
                        onChange={(e) => setPostData({ ...postData ,stock: e.target.value })} 
                    />
                    <small id="stockHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="examplePrice">Precio: </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        aria-describedby="priceHelp" 
                        value={postData.price} 
                        onChange={(e) => setPostData({ ...postData ,price: e.target.value })} 
                    />
                    <small id="priceHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleCategory">Categoría</label>
                    <select 
                        className="form-control"
                        value={postData.category} 
                        onChange={(e) => setPostData({ ...postData ,category: e.target.value })} 
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <br />
                    <Filebase className="form-control" type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData ,imageProduct: base64 })} />
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </>
    );
}

export default Form;