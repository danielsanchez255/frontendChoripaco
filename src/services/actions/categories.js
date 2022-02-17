import * as api from '../../api';

//Action creators

export const getCategories = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCategories();
        dispatch({type: 'FETCH_ALL_CATEGORIES', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createCategory = (category) => async(dispatch) => {
    try {
        const { data } = await api.createCategory(category);
        dispatch({type: 'CREATE_CATEGORY', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateCategory = (id, category) => async(dispatch) => {
    try {
        const { data } = await api.updateCategory(id, category);
        dispatch({type: 'UPDATE_CATEGORY', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategory = (id) => async(dispatch) => {
    try {
        await api.deleteCategory(id);
        dispatch({type: 'DELETE_CATEGORY', payload: id});
    } catch (error) {
        console.log(error);
    }
}