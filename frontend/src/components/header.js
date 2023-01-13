import './global.css';
import {  useNavigate } from "react-router-dom";

const Logo = require('../assets/logo/F1-LOGO.png')

function Header() {

    const navigate = useNavigate();

    return (
        <div class="container-header">
            <section class="top-nav">
                <div class="Logo-wrap">
                    <img src={Logo} alt='test' class="logo" onClick={() => navigate("/")}></img>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li><button className='nav-header-btn' onClick={() => navigate("/classement")}> CLASSEMENT</button></li>
                    <li><button className='nav-header-btn' onClick={() => navigate("/calendrier")}> CALENDRIER</button></li>
                    <li><button className='nav-header-btn' onClick={() => navigate("/wiki")}> WIKI F1</button></li>
                </ul>
            </section>
        </div>
    )   
}



export default Header;