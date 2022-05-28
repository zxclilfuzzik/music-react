import React from 'react';

import { Box, Typography } from '@mui/system';

import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';
import LibraryList from '../components/LibraryList';

import '../css/library.modules.css';

const Library = () => {
    
    return (
        <div className = 'container'>
            <Sidebar />

            <Box sx = {{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <TitleBar title = 'Library' />

                <Box sx = {{
                    marginTop: '40px',
                }}>
                    <LibraryList textName = 'fffff' />
                    <LibraryList textName = 'fffff' />
                    <LibraryList textName = 'fffff' />
                    <LibraryList textName = 'fffff' />
                    <LibraryList textName = 'fffff' />
                </Box>
            </Box>
        </div>
    );
}

export default Library;