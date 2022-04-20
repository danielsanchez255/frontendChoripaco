import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    
    if (localStorage.getItem('profile')) {
        //console.log("Req: ", JSON.parse(localStorage.getItem('profile')).token);
        req.headers.authorization = `Bearer ${ JSON.parse(localStorage.getItem('profile')).token }`;
    }

    return req;
});

export const signIn = (formData) => API.post('users/signin', formData);

const urlForProducts = '/products';

export const fetchProducts  = () => API.get(urlForProducts).catch((error) => console.log("Error: ", error));
export const createProduct = (newProduct) => API.post(urlForProducts, newProduct);
export const updateProduct = (id, updateProduct) => API.patch(`${urlForProducts}/${id}`, updateProduct);
export const deleteProduct = (id) => API.delete(`${urlForProducts}/${id}`);

const urlForCategories = '/categories';

export const fetchCategories  = () => API.get(urlForCategories);
export const createCategory = (newCategory) => API.post(urlForCategories, newCategory);
export const updateCategory = (id, updateCategory) => API.patch(`${urlForCategories}/${id}`, updateCategory);
export const deleteCategory = (id) => API.delete(`${urlForCategories}/${id}`);