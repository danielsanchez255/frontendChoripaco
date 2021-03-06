import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Pages
import Home from '../pages/Home/Home.jsx';
import AboutUs from '../pages/AboutUs/AboutUs.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import FindUs from '../pages/FindUs/FindUs.jsx';
import Shop from '../pages/Shop/Shop.jsx';
import Menu from '../pages/Menu/Menu.jsx';

//Administrator
import CategoriesAdmin from '../pages/Admin/CategoriesAdmin/CategoriesAdmin.jsx';
import LoginAdmin from '../pages/Admin/LoginAdmin/LoginAdmin.jsx';
import ProductsAdmin from '../pages/Admin/ProductsAdmin/ProductsAdmin.jsx';
import Cart from '../pages/Cart/Cart.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/conocenos" element={<AboutUs/>}/>
        <Route path="/encuentranos" element={<FindUs/>}/>
        <Route path="/contactanos" element={<Contact/>}/>
        <Route path="/tienda" element={<Shop/>}/>
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/administrador/entrar" element={<LoginAdmin/>}/>
        <Route path="/administrador/productos" element={<ProductsAdmin/>}/>
        <Route path="/administrador/categorias" element={<CategoriesAdmin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;