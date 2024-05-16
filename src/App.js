import './App.css';
import { Router,Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Nawigacja from './Nawigacja';
import Konf from './Konf';
import Home from './Home';

function App() {
  let maleLit = "abcdefghijklmnopqrstuvwyxz";
  let duzeLit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cyfry   = "01234567890";
  let znakiSp = "~!@#$%^&*()_+[]{},.<>/?;:"; //`"'/\
  let czyML=true, czyDL, czyCY, czyZS;
  let dl=8;


  function konf()
  {

  }
  return (
    <div className="App">
      <h1>hasła</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nawigacja />} >
            <Route path='index' element={<Home />} />
            <Route path='konf' element={<Konf f={konf}/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
