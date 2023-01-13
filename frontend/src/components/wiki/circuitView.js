
import React, { useState } from "react";

//style CSS
import '../global.css';

function Circuit() {

    const getInitialState = () => {
        const value = "Miami";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };

    return (
        <div className='Container-view'>
            <div className="content-wrap">
                <div className="container_track">
                    <div className="selectTrack">
                        <h1>WIKI CIRCUIT</h1>
                        <select className="selectDriver" value={value} onChange={handleChange}>
                            <option>Miami</option>
                            <option>Monaco</option>
                            <option>Le Castellet</option>
                        </select>
                    </div>
                    <div className="track">
                        {value === 'Miami' && 
                            <div className="trackInfo">
                                <img className="trackImg" src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/9col/image.png"></img>
                                <div className="trackData">
                                    <h4>Circuit de Miami</h4>
                                    <h4>Longueur : 5.412 km</h4>
                                    <h4>Nombre de tours : 57</h4>
                                    <h4>record au tours : 1:31.361</h4>
                                </div>   
                            </div>
                        }
                          {value === 'Monaco' && 
                            <div className="trackInfo">
                                <img className="trackImg" src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png.transform/9col/image.png"></img>
                                <div className="trackData">
                                    <h4>Circuit de Monaco</h4>
                                    <h4>Longueur : 3.337 km</h4>
                                    <h4>Nombre de tours : 78</h4>
                                    <h4>record au tours : 1:12.909</h4>
                                </div>
                            </div>
                        }
                          {value === 'Le Castellet' && 
                            <div className="trackInfo">
                                <img className="trackImg" src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/France_Circuit.png"></img>
                                <div className="trackData">
                                    <h4>Circuit du Castellet</h4>
                                    <h4>Longueur : 5.842 km</h4>
                                    <h4>Nombre de tours : 53</h4>
                                    <h4>record au tours : 1:32.740</h4>
                                </div>
                            </div>
            
                        }
                    </div>
                </div>
                
            </div>
        </div>
     )  
}

export default Circuit;