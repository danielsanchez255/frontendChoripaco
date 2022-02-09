import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Pages
import ProductsAdmin from '../pages/Admin/ProductsAdmin/ProductsAdmin.jsx'
import Home from '../pages/Home/Home.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<ProductsAdmin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;