import React from 'react';

import { Box } from '@mui/system';

import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';
import RadioTheme from '../components/RadioTheme';

import '../css/radio.modules.css';

const Radio = (props) => {

    return (
        <>
            <div className='container'>
                <Sidebar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>

            <div className='wrapper'>
                    <TitleBar title = {'Radio'} />
                </div>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '3vh'
                }}>
                    <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} leftMagrin = {'40px'} />
                    <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} />
                    <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} />
                    <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} />
                    <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} />
                    <RadioTheme title = {'fff'} color = {'black'} textColor = {'red'} />
                </Box>

                </Box>
            </div>
        </>
    );
}

export default Radio;
