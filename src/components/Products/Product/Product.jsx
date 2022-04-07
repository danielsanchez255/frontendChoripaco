import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';

import { deleteProduct } from '../../../services/actions/products.js';
import { addToCart } from '../../../services/actions/cart.js';

//Redux
import { getCategories } from '../../../services/actions/categories.js';

import Swal from "sweetalert2"; 

import AWN from "awesome-notifications";

import moment from 'moment';
import 'moment/locale/es';

import './Product.css'

const Product = ({ administrator, product, setCurrentId }) => {

    const categories = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    let notifier = new AWN();

    const fromNowInSpanish = (date) => {
        moment.locale('es');
        //const momentInSpanish = moment(date).format('LLL');
        const momentInSpanish = moment(date).fromNow();
        return momentInSpanish;
    }

    const categoryName = (category) => {
        return categories.find(item => item.id === category.id).name;
    }

    const deleteClick = (id) => {
        Swal.fire({
            title: 'Eliminar producto',
            text: '¿Estás seguro de eliminar este producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f04e39',
            cancelButtonColor: '#181e1c',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {        
                dispatch(deleteProduct(id));
            }
        });
    }

    const handleClick = (product) => {
        notifier.success('Producto agregado al carrito', {
            labels: {
                success: 'Excelente',
                confirmOK: 'Confirmar',
                confirmCancel: 'Cancelar'
            }
        });
        dispatch(addToCart(product));
    }

    return (
        <>
            <Zoom>
                <div className="card mb-3" style={{ width: '100%' }}>
                    <img className="card-img-top" src={ product.imageProduct } srcSet={ product.imageProduct } alt={ product.name } />
                    {
                        !administrator ? 
                            <div className="card-img-overlay">
                                <h5 className="card-title text-white text-center" style={{ textShadow: '2px 2px 3px #333' }}>{ product.name }</h5>
                                <button className="plus-button" onClick={() => handleClick(product)}><i className="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                        :
                        <div className="card-body">
                            <h6 className="card-title text-dark">{ product.name }</h6>
                            <p className="card-text">
                                <b>Precio: </b>${ product.price }
                                <br/>
                                <b>Categoría: </b> { categoryName(product.category) }
                                <br/>
                                <b>Descripción: </b> { product.description }
                                <br/>
                                <b>Creado { fromNowInSpanish(product.createdAt) }</b>
                            </p>
                            <button className="btn btn-edit mt-1 mr-1" onClick={() => setCurrentId(product._id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <button className="btn btn-remove mt-1 mr-1" onClick={() => deleteClick(product._id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                    }
                </div>
            </Zoom>
        </>
    );
}

const mapStateToProps = (state)=>{
    return {
        addedItems: state.cart.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    
    return {
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);