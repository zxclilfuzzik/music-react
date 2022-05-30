import React from 'react';

import { Box } from '@mui/system';

import '../css/albumcover.modules.css';


const AlbumCover = (props) => {

    return (
        <Box sx = {{
            width: '180px',
            height: '180px',
            backgroundColor: props.colorBg || 'black',
            backgroundRepeat: 'no-repeat',
            borderRadius: '15px',
            backgroundImage: `url(${props.image})`,
            marginLeft: props.margin || '2vw'
        }}>
        </Box>
    );
}

export default AlbumCover;



