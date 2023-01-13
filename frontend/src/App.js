import React from 'react';
import './App.css';

//COMMENTAIRE 
/** 
 * Les données du site devait provenir d'une API développer dans un autre cours 
 * mais j'ai pas eu le temps de ternminer donc le site utilise des données en
 * dur pour donner un visuelle de ce que cela aurais du étre avec des données 
 * dynamique. 
 */

import {  useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className='content-wrap'>
        <div className='content-box'>
          <h1 className='pageTitle'>FORMULA TRACKER</h1>
          <div className='card-container'>
            <div className='card-box' name="card1" onClick={() => navigate("/classement")}>
              <h2 className='titleCard'>CLASSEMENT</h2>
            </div>
            <div className='card-box' name="card2" onClick={() => navigate("/calendrier")}>
              <h2 className='titleCard'>CALENDRIER</h2>
            </div>
            <div className='card-box' name="card3" onClick={() => navigate("/wiki")}>
              <h2 className='titleCard'>WIKI</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;