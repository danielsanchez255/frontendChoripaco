import React, { useEffect, useState } from 'react';
import Filebase from 'react-file-base64';
import './ProductForm.css';

import { useDispatch, useSelector } from 'react-redux';
import { createProduct, updateProduct } from '../../services/actions/products.js';
import { getCategories } from '../../services/actions/categories.js';

const ProductForm = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({
        name: '', stock: '', price: '', category: '', imageProduct: ''
    });
    
    const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null);
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    const clear = () => {
        setCurrentId(null);
        setPostData({ name: '', stock: '', price: '', category: '', imageProduct: '' });
    }

    useEffect(() => {
        dispatch(getCategories());
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
                        {
                            !categories.length ? <option value="null">
                                                    No hay categorías disponibles
                                                </option>  : 
                                categories.map((category) => (
                                    <option value={category._id}>
                                        {category.name}
                                    </option>
                                ))
                                 
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <br />
                    <Filebase id="inputfile" type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData ,imageProduct: base64 })} />
                    <label htmlFor="file">Choose a file</label>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </>
    );
}

export default ProductForm;