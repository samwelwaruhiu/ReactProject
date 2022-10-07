import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import AddAerobicsExercise from './component/AddAerobicExercise';
import Aerobics from './component/Aerobics';
import About from './component/About';
import NavBar from './component/NavBar';





function App() {
 



  return (
    <div>
    <NavBar/>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/aerobics' element = {<Aerobics/>}/>
    <Route path='/addaerobics' element = {<AddAerobicsExercise/>}/>
    <Route path='/about' element = {<About/>}/>
    
  
  </Routes>
  </div>
      
  );
}

export default App;