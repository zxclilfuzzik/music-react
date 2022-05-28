import React from 'react';

import { Box } from '@mui/system';

import Sidebar from '../components/Sidebar';
import TitleBar from '../components/TitleBar';
import AlbumCover from '../components/AlbumCover';
import Theme from '../components/Theme';

import '../css/home.modules.css'


const Home = (props) => {

    return (
        <>
            <Box sx = {{
                display: 'flex',
                flexDirection: 'row',
                height: '100vh'
            }}>
                <Sidebar />

                <Box sx = {{
                     maxWidth: '75vw',
                     display: 'flex',
                     flexDirection: 'column'
                }}>

                    <TitleBar title = 'Home' />
                    <Box sx = {{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Theme title = 'ffff' />
                        <Theme title = 'ffff' />
                        <Theme title = 'ffff' />
                        <Theme title = 'ffff' />
                    </Box>

                    <Box sx ={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '3vh'
                    }}>
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Home;
