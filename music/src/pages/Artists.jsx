import React from 'react';

import { Typography, Box, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';

const Artists = (props) => {

    return (
        <div className = 'container'>
            <Sidebar />

            <div className = 'wrapper'>
                <Paper style = {{backgroundImage: props.image}} sx = {{
                    backgroundColor: 'black',
                    height: '45vh',
                    width: '86vw',
                    borderRadius: 0,
                }}>
                    <ArtistName name = 'zxcursed' />
                    
                </Paper>
            </div>
        </div>
    );
}

const ArtistName = (props) => {

    return (
        <Box>
            <Typography sx = {{
                color: 'white',
                fontSize: '50px',
                fontWeight: 'bold',
                paddingTop: '36vh',
                paddingLeft: '30px'
            }}>{props.name}</Typography>
        </Box>
    );
}

export default Artists;