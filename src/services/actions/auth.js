import * as api from '../../api';

export default signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: 'AUTH', data});

        history.push("/");
    } catch (error) {
        console.log(error);   
    }
}