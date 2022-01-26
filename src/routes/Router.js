import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Pages
import Home from '../pages/Home/Home.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/Conócenos" element={<Home/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;