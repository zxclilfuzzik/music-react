import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import Radio from './pages/Radio';
import Present from './pages/Present';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="test" element = {<Present />} />
        <Route path="test" element = {<Present />} />
        <Route path="test" element = {<Present />} />
        <Route path="test" element = {<Present />} />
        <Route path="test" element = {<Present />} />
        <Route path="test" element = {<Present />} />
        <Route path="test" element = {<Present />} />
      </Routes>
    </>
  );
}

export default App;

