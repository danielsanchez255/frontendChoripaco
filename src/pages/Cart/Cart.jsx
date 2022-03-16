import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import Header from '../../components/Header/Header.jsx';
import { removeItem, addQuantity, subtractQuantity} from '../../services/actions/cart.js';

import './Cart.css';

const Cart = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.addedItems);
    const itemsTotal = useSelector((state) => state.cart.total);

    console.log("Items: ", items);

    //to remove the item completely
    const handleRemove = (id)=>{
        console.log("It works!");
        dispatch(removeItem(id));
    }
    //to add the quantity
    const handleAddQuantity = (id)=>{
        dispatch(addQuantity(id));
    }
    //to substruct from the quantity
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
                <li className="collection-item" key={ item.product._id }>
                    <div className="row">
                        <div className="col-3">
                            <div className="item-img">
                                <img src={ item.product.imageProduct } srcSet={ item.product.imageProduct } alt={ item.product.name } />
                                <p className="quantity">
                                    <b>{ item.product.quantity }</b> 
                                </p> 
                            </div>
                        </div>
                        <div className="col-4 offset-md-1">
                            <div className="item-description">
                                <span className="title">{ item.product.name }</span>
                                <p>{ item.product.description }</p>                           
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
                            <p>
                                ${ item.product.price }
                            </p> 
                            <p className="price">
                                ${ item.product.price * item.product.quantity }
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