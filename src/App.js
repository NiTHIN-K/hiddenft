import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import New from './new.js'
import Home from './Home';
import { ChakraProvider } from '@chakra-ui/provider';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/new' element={<New/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
