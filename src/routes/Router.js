import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Pages
import Admin from '../pages/Admin/Admin.jsx'
import Home from '../pages/Home/Home.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;