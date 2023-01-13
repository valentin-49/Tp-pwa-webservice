import React from "react";

//COMMENTAIRE 
/**
 * Une boucle for devait afficher chaque ligne du tableau via un appel APi
 */


//style CSS
import '../global.css';

function LeaderBoard() {

    const pageTitle = 'classement';

    return (
        <div className='Container-view'>
            <div className="content-wrap">
                    <div className="leaderboradRow">
                        <div className="position">Position</div>
                        <div className="driverName">Pilote</div>
                        <div className="victory">Victoire</div>
                        <div className="Points">Points</div>
                    </div>
                <div className="leaderboard">
                    <div className="leaderboradObjectRow">
                        <div className="position">1</div>
                        <div className="driverName">Lewis Hamilton</div>
                        <div className="victory">8</div>
                        <div className="Points">256</div>
                    </div>
                    <div className="leaderboradObjectRow">
                        <div className="position">2</div>
                        <div className="driverName">Max Verstappen</div>
                        <div className="victory">6</div>
                        <div className="Points">248</div>
                    </div>
                    <div className="leaderboradObjectRow">
                        <div className="position">3</div>
                        <div className="driverName">Charles Leclerc</div>
                        <div className="victory">3</div>
                        <div className="Points">230</div>
                    </div>
                </div>
            </div>    
       </div>
     )  
}

export default LeaderBoard;