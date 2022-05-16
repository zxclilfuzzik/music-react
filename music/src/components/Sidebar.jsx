import React from 'react';
import { Link } from 'react-router-dom';

import '../css/sidebar.modules.css'


const Sidebar = () => {
    
    return (
 
        <>
                <div className = "sidebar">

                    <h1 className = "logo-text">SOUNDCLOUD</h1>
                    <li><h2 className = "menu-text">Меню</h2></li> 
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/radio">Radio</Link></li>
                    <li><Link to="/library">Library</Link></li>
                    <li><Link to="/search">Search</Link></li>
            
                </div>

        </>
       
    );
}

export default Sidebar;
