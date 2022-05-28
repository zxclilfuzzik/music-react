import React from 'react';

import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

import '../css/sidebar.modules.css'


const Sidebar = (props) => {
    
    return (
 
        <>
                <div className = 'sidebar'>
                    <div>
                        <h1 className = 'logo-text'>SOUNDCLOUD</h1>

                        <li><h2 className = 'menu-text'>Меню</h2></li> 

                        <li><Link to = '/home'>Home</Link></li>
                        <li><Link to = '/radio'>Radio</Link></li>
                        <li><Link to = '/library'>Library</Link></li>
                        <li><Link to = '/search'>Search</Link></li>
                    </div>

                    <div className = 'sidebar-other'>
                        <Divider />
                        <h2>Other</h2>

                        <li><Link to = '/profile'>Profile</Link></li>
                    </div>
                </div>

        </>
       
    );
}

export default Sidebar;
