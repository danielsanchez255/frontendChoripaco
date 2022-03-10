import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { deleteProduct } from '../../../services/actions/products.js';
import { addToCart } from '../../../services/actions/cart.js'

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

    const handleClick = (id)=>{
        dispatch(addToCart(id)); 
    }

    return (
        <div className="card mb-3" style={{ width: '100%' }}>
            <img src={ product.imageProduct } className="card-img-top" alt={ product.imageProduct } />
            {!administrator ? 
                <div className="card-img-overlay">
                    <h5 className="card-title text-white text-center" style={{ textShadow: '2px 2px 3px #333' }}>{ product.name }</h5>
                    <button to="/" className="plus-button" onClick={() => handleClick(product._id)}><i className="fa fa-plus" aria-hidden="true"></i></button>
                </div>
            :
            <div className="card-body">
                <h5 className="card-title text-dark">{ product.name }</h5>
                <p className="card-text">
                    <b>Precio: </b>${ product.price }
                    <br/>
                    <b>Categoría: </b> { product.category }
                    <br/>
                    <b>Creado { fromNowInSpanish(product.createdAt) }</b>
                </p>
                <a href="#" className="btn btn-primary mt-1 mr-1" onClick={() => setCurrentId(product._id)}>Modificar</a>
                <a href="#" className="btn btn-danger mt-1 mr-1" onClick={() => dispatch(deleteProduct(product._id))}>Eliminar</a>
            </div>
            }
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}

const mapDispatchToProps = (dispatch)=>{
    
    return {
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);