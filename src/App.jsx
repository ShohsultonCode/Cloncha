import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavPartSec from './components/NavPartSec'
import Home from './pages/Home'
import About from './pages/About'
import Following from './pages/Following'
import Followers from './pages/Followers'
const App = () => {
  return (
    <>
    <Navbar/>
    <NavPartSec/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rep' element={<About/>}/>
        <Route path='/following' element={<Following/>}/>
        <Route path='/rep/following' element={<Following/>}/>
        <Route path='/followers/following' element={<Following/>}/>
        <Route path='/followers/rep/following' element={<Following/>}/>
        <Route path='/rep/flowing/following' element={<Following/>}/>
        

        <Route path='/followers' element={<Followers/>}/>
        <Route path='/rep/followers' element={<Followers/>}/>
        <Route path='/following/followers' element={<Followers/>}/>
        <Route path='/following/rep/followers' element={<Followers/>}/>
        <Route path='/rep/flowing/followers' element={<Followers/>}/>
        
      </Routes>
      <Footer/>
    </>
  );
};

export default App;