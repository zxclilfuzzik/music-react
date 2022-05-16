import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Radio from './pages/Radio';
import Present from './pages/Present';
import Library from './pages/Library';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';
import Artists from './pages/Artists';
import Recovery from './pages/Recovery';
import HelpPage from './pages/HelpPage';

function App(props) {

  return (
    <>
      <Routes>
        <Route path = "home" element = {<Home />} />
        <Route path = "radio" element = {<Radio />} />
        <Route path = "library" element = {<Library />} />
        <Route path = "profile" element = {<Profile />} />
        <Route path = "register" element = {<Register />} />
        <Route path = "login" element = {<Login />} />
        <Route path = "/" element = {<Present />} />
        <Route path = '*' element = {<NotFound />} />
        <Route path = 'search' element = {<SearchPage />} />
        <Route path = 'artist' element = {<Artists />} />
        <Route path = 'recovery' element = {<Recovery />} />
        <Route path = 'help' element = {<HelpPage />} />
      </Routes>
    </>
  );
}

export default App;

