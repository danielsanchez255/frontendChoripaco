import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

const Product = ({ product, setCurrentId }) => {

    const fromNowInSpanish = (date) => {
        moment.locale('es');
        //const momentInSpanish = moment(date).format('LLL');
        const momentInSpanish = moment(date).fromNow();
        return momentInSpanish;
    }

    return (
        <div className="card mb-3" style={{ width: '100%' }}>
            <img src={ product.imageProduct } class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ product.name }</h5>
                <p className="card-text">
                    <b>Precio: </b> { product.price }
                    <br/>
                    <b>Categoría: </b> { product.category }
                    <br/>
                    <b>Creado { fromNowInSpanish(product.createdAt) }</b>
                </p>
                <a href="#" className="btn btn-primary mt-1 mr-1" onClick={() => setCurrentId(product._id)}>Modificar</a>
                <a href="#" className="btn btn-danger mt-1 mr-1" onClick={() => {}}>Eliminar</a>
            </div>
        </div>
    );
}

export default Product;