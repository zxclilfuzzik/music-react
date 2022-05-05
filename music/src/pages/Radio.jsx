import React from 'react';

import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';

import '../css/radio.modules.css';

const Radio = () => {

    return (
        <>
            <div className='container'>
                <Sidebar />

                <div className='wrapper'>
                    <TitleBar title = {'Radio'} />
                </div>
            </div>
        </>
    );
}

export default Radio;
