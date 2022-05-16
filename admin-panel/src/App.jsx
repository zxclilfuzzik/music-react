import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

function App(props) {

    return(
        <>
            <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = 'home' element = {<Home />} />
                <Route path = '' element = {<Home />} />
                <Route path = '' element = {<Home />} />
            </Routes>
        </>
    );
}

export default App;