import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { deleteProduct } from '../../../services/actions/products.js';
import { addToCart } from '../../../services/actions/cart.js';

import Swal from "sweetalert2"; 

import moment from 'moment';
import 'moment/locale/es';

import './Product.css'

const Product = ({ administrator, product, setCurrentId }) => {

    const dispatch = useDispatch();

    const fromNowInSpanish = (date) => {
        moment.locale('es');
        //const momentInSpanish = moment(date).format('LLL');
        const momentInSpanish = moment(date).fromNow();
        return momentInSpanish;
    }

    const deleteClick = (id) => {
        Swal.fire({
            title: 'Eliminar producto',
            text: '¿Estás seguro de eliminar este producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'yellow',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {        
                dispatch(deleteProduct(id));
            }
        });
    }

    const handleClick = (product) => {
        dispatch(addToCart(product)); 
    }

    return (
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
                    <h5 className="card-title text-dark">{ product.name }</h5>
                    <p className="card-text">
                        <b>Precio: </b>${ product.price }
                        <br/>
                        <b>Categoría: </b> { product.category }
                        <br/>
                        <b>Descripción: </b> { product.description }
                        <br/>
                        <b>Creado { fromNowInSpanish(product.createdAt) }</b>
                    </p>
                    <button className="btn btn-secondary mt-1 mr-1" onClick={() => setCurrentId(product._id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button className="btn btn-danger mt-1 mr-1" onClick={() => deleteClick(product._id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            }
        </div>
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