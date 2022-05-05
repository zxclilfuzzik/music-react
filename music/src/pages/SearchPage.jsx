import React, { Component } from 'react';

import { TextField, Box, Typography } from '@mui/material';

import Sidebar from '../components/Sidebar';
import TitleBar from '../components/TitleBar';

import '../css/radio.modules.css'

const SearchPage = () => {

    return (
        <>
            <div className='container'>
                <Sidebar />

                <div className='wrapper'>
                    <Box>
                        <TitleBar title = 'Search'/>
                        <TextField id = "filled-basic" label = "Outlined" variant = "filled" fullWidth/>
                        <Typography>fff</Typography>
                    </Box>
                </div>

            </div>
        </>
    );
}

export default SearchPage;