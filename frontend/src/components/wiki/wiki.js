import React, { Component, useState } from "react";

import Pilote from "./piloteView";
import Circuit from "./circuitView";
import Ecurie from "./ecurieView";

//style CSS
import '../global.css';


function LeaderBoard() {

    const pageTitle = 'wiki formule 1';

    const [activeComponent, setActiveComponent] = useState ('pilote');

    const HandleNavClick = (component) => {
        setActiveComponent(component);
    }

    return (
        <div className='Container-view'>
            <div className='nav-wrap'>
                <button className='nav-header-btn' name='navbar' onClick={() => HandleNavClick('pilote')}>PILOTE</button>
                <button className='nav-header-btn' name='navbar' onClick={() => HandleNavClick('ecurie')}>TEAM</button>
                <button className='nav-header-btn' name='navbar' onClick={() => HandleNavClick('circuit')}>CIRCUIT</button>
            </div>
            <div className="content-wrap">
                {activeComponent === 'pilote' && <Pilote />}
                {activeComponent === 'ecurie' && <Ecurie />}
                {activeComponent === 'circuit' && <Circuit />}
            </div>    
       </div>
     )  
}

export default LeaderBoard;