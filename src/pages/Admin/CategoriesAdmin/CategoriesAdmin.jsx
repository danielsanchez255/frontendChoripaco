import React, { useState, useEffect } from 'react';

//Components
import ProductForm from '../../../components/CategoryForm/CategoryForm.jsx';
/* import Products from '../../../components/Products/Products.jsx'; */
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

//Redux
import { getCategories, deleteCategory } from '../../../services/actions/categories.js';
import { useDispatch, useSelector } from 'react-redux';

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
                <div className="row">
                    <div className="col-md-7 mt-5 offset-md-2">
                        <ul class="list-group">
                            {
                                !categories.length ? <h1>No hay categorías</h1> : (
                                    <div className="layoutProducts">
                                        {categories.map((category) => (
                                            <li class="list-group-item">
                                                {category.name}
                                                <button type="button" class="close" aria-label="Close" onClick={() => dispatch(deleteCategory(category._id))}>
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
                        <ProductForm currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </div>
            </div>
        </>
    );

}

export default CategoriesAdmin;