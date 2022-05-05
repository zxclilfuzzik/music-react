import React from 'react';

import { Box } from '@mui/system';

import Sidebar from '../components/Sidebar';
import TitleBar from '../components/TitleBar';
import AlbumCover from '../components/AlbumCover';
import Theme from '../components/Theme';

import '../css/home.modules.css'


const Home = () => {

    return (
        <>
            <div className = "container">

                <Sidebar />

                <div className = "content">
                    <TitleBar title = {'Home'} />

                    <div className = "state">
                        <Theme title = 'Артисты недели' />
                        <Theme title = 'Проверка недели' />
                        <Theme title = 'Проверка недели' />
                        <Theme title = 'Проверка недели' />

                    </div>

                    <Box className = "playlists" sx = {{
                        display: 'flex',
                        paddingTop: '90px'
                    }}>
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                    </Box>

                    <Box className = "playlists" sx = {{
                        display: 'flex',
                        paddingTop: '50px',
                    }}>
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                        <AlbumCover />
                    </Box>

                </div>

            </div>
        </>
    );
}

export default Home;
