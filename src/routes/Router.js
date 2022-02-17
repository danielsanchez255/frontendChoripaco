import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Pages
import Home from '../pages/Home/Home.jsx';
import CategoriesAdmin from '../pages/Admin/CategoriesAdmin/CategoriesAdmin.jsx';
import ProductsAdmin from '../pages/Admin/ProductsAdmin/ProductsAdmin.jsx'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/administrador/productos" element={<ProductsAdmin/>}/>
        <Route path="/administrador/categorias" element={<CategoriesAdmin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;