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
        setPostData({ name: '', stock: '', price: '', category: '', imageProduct: '', description: '' });
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
            {
                currentId ? 
                    <button className="btn btnCreateProduct" onClick={() => clear()}>Crear</button> 
                : 
                    <></>

            }
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
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input 
                                type="number" 
                                className="form-field" 
                                aria-describedby="stockHelp" 
                                placeholder="Cantidad"
                                value={postData.stock} 
                                onChange={(e) => setPostData({ ...postData ,stock: e.target.value })} 
                            />
                            {
                                postData.stock === '' ? 
                                    <small id="stockHelp" className="form-text text-muted">Stock no v??lido.</small>
                                :
                                (
                                    <div></div>
                                )
                            }
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input 
                                type="number" 
                                className="form-field" 
                                aria-describedby="priceHelp" 
                                placeholder="Precio"
                                value={postData.price} 
                                onChange={(e) => setPostData({ ...postData ,price: e.target.value })} 
                            />
                            <small id="priceHelp" className="form-text text-muted">Precio no v??lido.</small>
                        </div>
                    </div>
                </div>

                {
                    currentId ? 
                        <span>Modificar</span> 
                    : 
                        <div className="form-group">
                            <select 
                                className="form-field"
                                onChange={(e) => setPostData({ ...postData ,category: e.target.value })} 
                            >
                                {
                                    !categories.length ? <option value="null">
                                                            No hay categor??as disponibles
                                                        </option>  : 
                                        categories.map((category) => (
                                            <option value={category._id}>
                                                {category.name}
                                            </option>
                                        ))
                                        
                                }
                            </select>
                        </div>
                }

                
                <div className="form-group">
                    <textarea 
                        className="form-field-area" 
                        placeholder="Ingresa la descripci??n del producto" 
                        rows="3"
                        value={postData.description} 
                        onChange={(e) => setPostData({ ...postData ,description: e.target.value })}
                    ></textarea>
                </div>
                <div className="form-group">
                    <div class="custom-file">
                        <Filebase id="inputfile" type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData ,imageProduct: base64 })} />
                        <label class="custom-file-label" for="inputGroupFile01">Elegir archivo</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-product mb-2">
                {
                    currentId ? 
                        <span>Modificar</span> 
                    : 
                        <span>Crear</span> 
                }
                </button>
            </form>
        </>
    );
}

export default ProductForm;