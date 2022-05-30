import React from 'react';

import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

import '../css/header.modules.css';

const Header = (props) => {
    
    return (
        <AppBar position = 'fixed' sx = {{
            backgroundColor: props.colorHeader || 'black',
        }}>
            <Container fixed>
                <Toolbar>
                    <Link to = '/'>
                        <Typography variant = 'h5'>
                            Blueberry
                        </Typography>
                    </Link>
                    <Box mr = {30}>
                        <div className = 'li-header'>
                            <Link to = '/help'><Typography variant='h7'>Помощь</Typography></Link>
                            <Link to = '#'><Typography variant='h7'>Информация</Typography></Link>
                            <Link to = '#'><Typography variant='h7'>Поддержка</Typography></Link>
                        </div>
                    </Box>
                    <Box mr = {-10}>
                        <Link to = '/login'>
                            <Button color = 'inherit' variant = 'outlined' size = 'small' sx = {{}}>
                            Войти
                            </Button>
                        </Link>
                    </Box>
                    <Link to = '/register'>
                        <Button color = 'secondary' variant = 'contained' size = 'small' sx = {{
                            color: 'black',
                            backgroundColor: '#E5E5E5'
                        }}>
                            Регистрация
                        </Button>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;



