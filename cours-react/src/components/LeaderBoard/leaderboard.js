import React from "react";

//AXIOS API


//style CSS
import '../global.css';

function LeaderBoard() {

    const pageTitle = 'classement';

    return (
        <div className='Container-view'>
            <div className="content-wrap">
                <div className='titleModules'><h2>{ pageTitle.toUpperCase() }</h2></div>
            </div>    
       </div>
     )  
}

export default LeaderBoard;