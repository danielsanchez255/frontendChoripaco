import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import background from '../../assets/img/cafe.png';

//Components
import Header from '../../components/Header/Header.jsx';
import { removeItem, addQuantity, subtractQuantity} from '../../services/actions/cart.js';

import './Cart.css';

const Cart = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.addedItems);

    console.log("Items: ", items);

    //to remove the item completely
    const handleRemove = (id)=>{
        console.log("It works!");
        dispatch(removeItem(id));
    }
    //to add the quantity
    const handleAddQuantity = (id)=>{
        addQuantity(id);
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id)=>{
        subtractQuantity(id);
    }
              
    let addedItems = items.length ?
    (  
        items.map((item)=>{
            return (
                <li className="collection-item" key={item.product._id}>
                    <div className="item-img">
                        <img src={item.product.imageProduct} alt={item.product.imageProduct} />
                    </div>
                
                    <div className="item-desc">
                        <span className="title">{item.product.name}</span>
                        <p>{item.description}</p>
                        <p><b>Precio: {item.product.price}$</b></p> 
                        <p>
                            <b>Cantidad: {item.product.quantity}</b> 
                        </p>                            
                    </div>
                    <div className="add-remove">
                        <Link to="/carrito"><i className="fa fa-arrow-up" aria-hidden="true" onClick={()=>handleAddQuantity(item.id)}></i></Link>
                        <Link to="/carrito"><i className="fa fa-arrow-down" aria-hidden="true" onClick={()=>handleSubtractQuantity(item.id)}></i></Link>
                    </div>
                    <button className="btn" onClick={() => handleRemove(item._id)}>Remove</button>
                </li>
            )
        })
    ):
    (
        <p>No hay productos en el carrito.</p>
    )

    return(
        <>
            <Header />
            <div style={{ position: 'relative', marginTop: '12.3rem', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="cart">
                        <h5>Productos en el carrito:</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>        
                </div>
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