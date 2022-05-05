import React from 'react';

import { Box } from '@mui/system';

import '../css/albumcover.modules.css';


const AlbumCover = (props) => {

    return (
        <Box sx = {{
            width: '190px',
            height: '190px',
            backgroundColor: 'red',
            borderRadius: '15px',
            marginLeft: '35px'
        }}>
            <img src = "" alt = "картинка" className = 'img-albumcover' />
        </Box>
    );
}

export default AlbumCover;