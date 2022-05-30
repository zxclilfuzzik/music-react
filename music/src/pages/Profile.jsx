import React from 'react';

import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import TitleBar from '../components/TitleBar';

import '../css/profile.modules.css';

const Profile = (props) => {
    
    return (
        <div className='container'>
            <Sidebar />

            <div className='wrapper'>
                <TitleBar title = 'Profile' />
            </div>
        </div>
    );
}

export default Profile;