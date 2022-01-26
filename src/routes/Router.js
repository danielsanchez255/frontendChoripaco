import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Pages
import Index from '../pages/Index/Index.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;