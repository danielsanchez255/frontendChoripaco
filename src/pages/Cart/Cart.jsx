import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AWN from "awesome-notifications";

//Components
import Header from '../../components/Header/Header.jsx';
import { removeItem, addQuantity, subtractQuantity} from '../../services/actions/cart.js';

import './Cart.css';

const Cart = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.addedItems);
    const itemsTotal = useSelector((state) => state.cart.total);

    let notifier = new AWN();

    const handleRemove = (id)=>{
        notifier.alert('Producto removido al carrito', {
            labels: {
                alert: 'Excelente'
            }
        });
        dispatch(removeItem(id));
    }
    
    const handleAddQuantity = (id)=>{
        dispatch(addQuantity(id));
    }
    
    const handleSubtractQuantity = (id)=>{
        dispatch(subtractQuantity(id));
    }

    let payingTotalItems = 
    <div className="fixedTotal">
        <div className="container">
            <div className="row text-center">
                <div className="col-4 justify-content-center">
                    <h3 style={{ marginTop: '5px' }}>Total</h3>
                </div>
                <div className="col-4 justify-content-center">
                    <h3 style={{ marginTop: '5px' }}>${ itemsTotal }</h3>
                </div>
                <div className="col-4 justify-content-center">
                    <button className="btn btn-total">
                        <b>Pagar</b>
                    </button>
                </div>
            </div>
        </div>
    </div>
              
    let addedItems = items.length ?
    (  
        items.map((item)=>{
            return (
                <li className="collection-item" key={ item._id }>
                    <div className="row">
                        <div className="col-3">
                            <div className="item-img">
                                <img src={ item.imageProduct } srcSet={ item.imageProduct } alt={ item.name } />
                                <p className="quantity">
                                    <b>{ item.quantity }</b> 
                                </p> 
                            </div>
                        </div>
                        <div className="col-4 offset-md-1">
                            <div className="item-description">
                                <span className="title">{ item.name }</span>
                                <p>{ item.description }</p>                           
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="add-remove">
                                <Link to="/carrito"><i className="fa fa-arrow-up" aria-hidden="true" onClick={() => handleAddQuantity(item._id)}></i></Link>
                                <Link to="/carrito"><i className="fa fa-arrow-down" aria-hidden="true" onClick={() => handleSubtractQuantity(item._id)}></i></Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-remove" onClick={() => handleRemove(item._id)}><i className="fa fa-times" aria-hidden="true"></i></button>
                            <p className="price">
                                ${ item.price }
                            </p> 
                            <p className="priceQuantity">
                                ${ item.price * item.quantity }
                            </p> 
                        </div>
                    </div>
                </li>
            )
        })
    ):
    (
        <p className="ml-4">No hay productos en el carrito.</p>
    )

    return(
        <>
            <Header />
            <div style={{ position: 'relative', marginTop: '12.3rem', backgroundColor: '#fff' }}>
                <div className="container mb-5">
                    <div className="cart">
                        <h5 className="pt-4">Productos en el carrito:</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>        
                </div>
                <div className="pt-4"></div>
                {payingTotalItems}
            </div>
        </>
    )
}


const mapStateToProps = (state)=>{
    return{
        //items: state.addedItems,
        addedItems: state.cart.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)