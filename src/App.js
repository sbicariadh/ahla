import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MovieList from './MovieList';
import Trailer from './Trailer';
import Contact from './Contact';
import NavBar from './NavBar';

//chekpoint router

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<MovieList/>} />
        <Route path='/trailer/:id' element={<Trailer/>} />
      </Routes>
    </div>
  );
}



export default App;
