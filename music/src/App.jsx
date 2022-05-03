import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Radio from './pages/Radio';
import Present from './pages/Present';
import Library from './pages/Library';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Search from './pages/Search';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path = "home" element = {<Home />} />
        <Route path = "radio" element = {<Radio />} />
        <Route path = "library" element = {<Library />} />
        <Route path = "profile" element = {<Profile />} />
        <Route path = "search" element = {<Search />} />
        <Route path = "register" element = {<Register />} />
        <Route path = "login" element = {<Login />} />
        <Route path = "/" element = {<Present />} />
        <Route path = '*' element = {<NotFound />} />
      </Routes>
      
    </>
  );
}

export default App;

