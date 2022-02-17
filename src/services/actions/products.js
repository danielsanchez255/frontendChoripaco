import * as api from '../../api';

//Action creators

export const getProducts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        dispatch({type: 'FETCH_ALL_PRODUCTS', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = (product) => async(dispatch) => {
    try {
        const { data } = await api.createProduct(product);
        dispatch({type: 'CREATE_PRODUCT', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = (id, product) => async(dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product);
        dispatch({type: 'UPDATE_PRODUCT', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = (id) => async(dispatch) => {
    try {
        await api.deleteProduct(id);
        dispatch({type: 'DELETE_PRODUCT', payload: id});
    } catch (error) {
        console.log(error);
    }
}