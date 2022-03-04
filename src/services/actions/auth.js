import * as api from '../../api';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: 'AUTH', data});

        navigate("/administrador/productos");
    } catch (error) {
        console.log(error);   
    }
}