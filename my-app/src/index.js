import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Display from './display'
import Cuisine from './cuisine'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Display/> }/>
            <Route exact path='/cuisine' element={ <Cuisine nationality='Chinese'/> }/>
        </Routes>
    </BrowserRouter>
);
