import { Link } from "react-router-dom";

import './Header.css'


const Header = () => {
    return (
        <div>
            <header>
                <div>
                    <h1>Vivekanand Collage Kolhapur</h1>
                </div>
                <nav>
                    <ul id="nav_item">
                        <li className="nav_menu"><Link to="/home">Home</Link></li>
                        <li className="nav_menu"><Link to="/about">About</Link></li>
                        <li className="nav_menu"><Link to="/course">Coursec</Link></li>
                        <li className="nav_menu"><Link to="/contact">Contact</Link></li>
                        
                    </ul>
                    <button id="addmission-btn"><Link to="/addmission">Apply Now!</Link></button>
                </nav>
            </header>
        </div>
    );

}

export default Header;