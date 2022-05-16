import React from 'react';

import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <AppBar position = 'fixed' sx = {{
            backgroundColor: 'black',
            height: '60px',
        }}>
            <Container fixed>
                <Toolbar>
                    <Link to = ''>fff</Link>
                    <Link to = ''>fff</Link>
                    <Link to = ''>fff</Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
