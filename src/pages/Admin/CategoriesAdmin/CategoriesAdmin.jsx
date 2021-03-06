import React, { useState, useEffect } from 'react';

//Components
import CategoryForm from '../../../components/CategoryForm/CategoryForm.jsx';
/* import Products from '../../../components/Products/Products.jsx'; */
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

//Redux
import { getCategories, deleteCategory } from '../../../services/actions/categories.js';
import { useDispatch, useSelector } from 'react-redux';

import loader from '../../../assets/img/loader.gif';

const CategoriesAdmin = () =>  {

    const categories = useSelector((state) => state.categories);
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <>
            <Sidebar />
            <div className="container">
                <div className="row pt-4">
                    <div className="col-md-7 mt-5 offset-md-2">
                        <h3 className="titleProducts">Categorías</h3>
                        <ul className="list-group">
                            {
                                !categories.length ? <div className="d-flex justify-content-center">
                                                        <div className="loaderContainer">
                                                            <img src={ loader } srcSet={ loader } width="70%" alt="loader" />
                                                        </div>  
                                                    </div>  : (
                                    <div className="layoutProducts">
                                        {categories.map((category) => (
                                            <li className="list-group-item">
                                                {category.name}
                                                <button type="button" className="close" aria-label="Close" onClick={() => dispatch(deleteCategory(category._id))}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </li>
                                        ))}
                                    </div>
                                )      
                            }
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <CategoryForm currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </div>
            </div>
        </>
    );

}

export default CategoriesAdmin;