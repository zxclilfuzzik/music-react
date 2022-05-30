import React from 'react';

import { Box, Typography } from '@mui/system';

import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';
import LibraryList from '../components/LibraryList';

import '../css/library.modules.css';

const Library = (props) => {
    
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
                    <LibraryList textName = 'astral step' textArtistName = 'zxcursed' colorBg = 'yellow' imageLink = '' />
                    <LibraryList textName = 'yesterday' textArtistName = 'the Beatles' colorBg = 'green' imageLink = '' />
                    <LibraryList textName = 'is not today' textArtistName = 'the Beatles' colorBg = 'red' imageLink = '' />
                    <LibraryList textName = 'help' textArtistName = 'the Beatles' colorBg = 'purple' imageLink = '' />
                    <LibraryList textName = 'i have not help' textArtistName = 'the Beatles' colorBg = 'pink' imageLink = '' />
                </Box>
            </Box>
        </div>
    );
}

export default Library;


