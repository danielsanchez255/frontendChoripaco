import axios from 'axios';

const urlForProducts = 'http://localhost:5000/products';

export const fetchProducts  = () => axios.get(urlForProducts);
export const createProduct = (newProduct) => axios.post(urlForProducts, newProduct);
export const updateProduct = (id, updateProduct) => axios.patch(`${urlForProducts}/${id}`, updateProduct);
export const deleteProduct = (id) => axios.delete(`${urlForProducts}/${id}`);

const urlForCategories = 'http://localhost:5000/categories';

export const fetchCategories  = () => axios.get(urlForCategories);
export const createCategory = (newCategory) => axios.post(urlForCategories, newCategory);
export const updateCategory = (id, updateCategory) => axios.patch(`${urlForCategories}/${id}`, updateCategory);
export const deleteCategory = (id) => axios.delete(`${urlForCategories}/${id}`);
