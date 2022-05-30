import React from 'react';

import { TextField, Box, Typography } from '@mui/material';

import Sidebar from '../components/Sidebar';
import TitleBar from '../components/TitleBar';

import '../css/radio.modules.css'

const SearchPage = (props) => {

    return (
        <>
            <div className = 'container'>
                <Sidebar />

                <div className = 'wrapper'>
                    <Box>
                        <TitleBar title = 'Search'/>

                        <Box sx = {{
                            marginLeft: '40px',
                            marginTop: '23px'
                        }}>
                            <TextField id = 'filled-basic' label = 'Поиск' variant = 'filled' sx = {{
                                width: '81vw'
                            }} />
                        </Box>

                        <Box sx = {{
                            marginTop: '40px'
                        }}>
                            {/* Тут результаты поиска */}
                        </Box>
                    </Box>
                </div>
            </div>
        </>
    );
}

export default SearchPage;


