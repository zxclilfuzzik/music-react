import React from 'react';

import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';

import '../css/library.modules.css';

const Library = () => {
    
    return (
        <div className='container'>
            <Sidebar />
            <div className='wrapper'>
                <TitleBar title = 'Library' />
            </div>
        </div>
    );
}

export default Library;