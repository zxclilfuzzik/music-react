import React from 'react';

import { BottomNavigation, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import '../css/footer.modules.css'

const Footer = (props) => {
    return (
        <BottomNavigation sx = {{
            backgroundColor: props.colorFooter || 'black',
            height: 100,
        }}>
            <Link to = '/'>
                <Typography align = 'center' sx = {{
                    color: props.colorText || 'white',
                    marginTop: 5
                }}>
                    MUSIC
                </Typography>
            </Link>
        </BottomNavigation>
    ); 
}

export default Footer;