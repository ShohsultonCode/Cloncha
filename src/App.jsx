import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavPartSec from './components/NavPartSec'
import Home from './pages/Home'
import About from './pages/About'
import Following from './pages/Following'
import Followers from './pages/Followers'
import Private from './private/Private'
const App = () => {
  return (
    <>
    <Navbar/>
    <NavPartSec/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rep' element={<About/>}/>
        <Route path='/following' element={<Following/>}/>
        <Route path='/followers' element={<Followers/>}/>
        <Route path='*' element={<Private/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;