import React, { useState } from "react";

import '../global.css';

function Pilote() {

  const getInitialState = () => {
    const value = "Lewis Hamilton";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='Container-view'>
      <div className="content-wrap">
        <div className="driverContent">
          <div className="selectwrap">
            <h1>WIKI PILOTE</h1>
            <select className="selectDriver" value={value} onChange={handleChange}>
              <option>Lewis Hamilton</option>
              <option>Max verstappen</option>
              <option>Niki Lauda</option>
              <option>Nicholas Latifi</option>
            </select>
          </div>
          <div className="driverdata">
          {value === 'Lewis Hamilton' && 
          <div className="driverCard">
            <div className="driverinfo">
              <h4 name="driverName">Lewis Hamilton</h4>
              <div className="driverPic">
                <img class="driverProfilePic" src="https://cdn-6.motorsport.com/images/mgl/0mb95oa2/s200/lewis-hamilton-mercedes-1.webp"></img>
              </div>
              <div className="driver">
                <h4>Nationalité : Anglais</h4>
                <h4>Titre : 103</h4>
                <h4>Victoire : 25</h4>
              </div>
            </div>
          </div>
        }
        {value === 'Max verstappen' && 
          <div className="driverCard">
            <div className="driverinfo">
              <h4>Max Verstappen</h4>
              <div className="driverPic">
                <img class="driverProfilePic" src="https://cdn-8.motorsport.com/images/mgl/24vA3r46/s8/max-verstappen-red-bull-racing-1.jpg"></img>
              </div>
              <div className="driver">
                <h4>Nationalité : Néerlandais</h4>
                <h4>Titre : 2</h4>
                <h4>Victoire : 35</h4>
              </div>
            </div>
          </div>
        }
        {value === 'Niki Lauda' && 
          <div className="driverCard">
            <div className="driverinfo">
              <h4>Niki Lauda</h4>
              <div className="driverPic">
                  <img class="driverProfilePic" src="https://www.autocarbure.com/wp-content/uploads/2019/05/niki-lauda-592x380.png"></img>
              </div>
              <div className="driver">
                <h4>Nationalité : Autrichienne</h4>
                <h4>Titre : 3</h4>
                <h4>Victoire : 25</h4>
              </div>
            </div>
          </div>
        }
        {value === 'Nicholas Latifi' && 
          <div className="driverCard">
            <div className="driverinfo">
              <h4>Nicholas Latifi (Le Goat)</h4>
              <div className="driverPic">
                  <img class="driverProfilePic" src="https://pbs.twimg.com/media/FenPLDbXoAEZd6R.jpg"></img>
              </div>
              <div className="driver">
                <h4>Nationalité : Canadien</h4>
                <h4>Titre : 0</h4>
                <h4>Victoire : 0</h4>
              </div>
            </div>
          </div>
        }
          </div>
        </div>
      </div>
    </div>
  );

  
}

export default Pilote;