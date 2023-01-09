import './global.css';
import {  useNavigate } from "react-router-dom";

const Logo = require('../assets/logo/F1-LOGO.png')

function Header() {

    const navigate = useNavigate();

    return (
        <div class="container-header">
            <div className='header-content'>
                <div class="Logo-wrap">
                    <img src={Logo} alt='test' class="logo" onClick={() => navigate("/")}></img>
                </div>
                <div class="Nav-wrap">
                    <button className='nav-header-btn' onClick={() => navigate("/classement")}> CLASSEMENT</button>
                    <button className='nav-header-btn' onClick={() => navigate("/calendrier")}> CALENDRIER</button>
                    <button className='nav-header-btn' onClick={() => navigate("/wiki")}> WIKI F1</button>
                </div>
            </div>
        </div>
    )   
}



export default Header;