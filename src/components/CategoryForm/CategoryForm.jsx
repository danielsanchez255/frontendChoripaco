import React, { useEffect, useState } from 'react';
import './CategoryForm.css';

import { useDispatch, useSelector } from 'react-redux';
import { createCategory, updateCategory } from '../../services/actions/categories.js';

const CategoryForm = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({
        name: ''
    });
    const category = useSelector((state) => currentId ? state.categories.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    const clear = () => {
        setCurrentId(null);
        setPostData({ name: '' });
    }

    useEffect(() => {
        if (category) setPostData(category)
    }, [category])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateCategory(currentId, postData));
            clear();
        } else {
            dispatch(createCategory(postData));
            clear();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h5>Formulario de categoría: </h5>
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
                <button type="submit" className="btn btn-category">Crear</button>
            </form>
        </>
    );
}

export default CategoryForm;