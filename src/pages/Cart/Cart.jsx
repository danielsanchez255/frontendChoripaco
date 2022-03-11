import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import background from '../../assets/img/cafe.png';

//Components
import Header from '../../components/Header/Header.jsx';
import { removeItem, addQuantity, subtractQuantity} from '../../services/actions/cart.js';

import './Cart.css';

const Cart = () => {

    const items = useSelector((state) => state.cart.addedItems);

    //to remove the item completely
    const handleRemove = (id)=>{
        removeItem(id);
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
                            <p>{item.desc}</p>
                            <p><b>Price: {item.product.price}$</b></p> 
                            <p>
                                <b>Quantity: {item.product.stock}</b> 
                            </p>
                            <div className="add-remove">
                                <Link to="/cart"><i class="fa fa-arrow-up" aria-hidden="true" onClick={()=>{this.handleAddQuantity(item.id)}}></i></Link>
                                <Link to="/cart"><i class="fa fa-arrow-down" aria-hidden="true" onClick={()=>{this.handleSubtractQuantity(item.id)}}></i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item._id)}}>Remove</button>
                        </div>
                    </li>
                )
            })
        ):

            (
            <p>Nothing.</p>
            )
    return(
        <>
            <Header />
            <div style={{ position: 'relative', marginTop: '12.3rem', backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="cart">
                        <h5>You have ordered:</h5>
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
        items: state.addedItems,
        //addedItems: state.addedItems
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