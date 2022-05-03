import React from 'react';

import { BottomNavigation, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import '../css/footer.modules.css'

const Footer = () => {
    return (
        <BottomNavigation sx = {{
            backgroundColor: 'black',
            height: 100,
        }}>
            <Link to = '/'>
                <Typography align = 'center' sx = {{
                    color: 'white',
                    marginTop: 5
                }}>
                    MUSIC
                </Typography>
            </Link>
        </BottomNavigation>
    ); 
}

export default Footer;