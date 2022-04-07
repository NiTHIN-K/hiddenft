import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import New from './new.js'
import Home from './Home';
import { ChakraProvider } from '@chakra-ui/provider';
import Viewer from './viewer';
import authContext from './authcontext';
import { ethers } from 'ethers';

function App() {
  const [auth, setAuth] = useState(new ethers.providers.Web3Provider(window.ethereum))

  return (
    <authContext.Provider value={{auth, setAuth}}>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/new' element={<New/>}/>
      <Route path='/viewer/:tokenID' element={<Viewer/>}/>
    </Routes>
    </BrowserRouter>
    </authContext.Provider>
  );
}

export default App;
